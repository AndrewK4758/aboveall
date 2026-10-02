import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { Button, Card, Badge, ThemeToggle } from '../elements';
import { AppThemeProvider } from '../theme/ThemeContext';
import App from './app';

describe('Above All HVAC & Mechanical Application', () => {
  beforeEach(() => {
    // Mock window.scrollTo
    window.scrollTo = vi.fn<() => void>();
    // Mock matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn<(query: string) => MediaQueryList>().mockImplementation(
        query =>
          ({
            matches: false,
            media: query,
            onchange: null,
            addListener: vi.fn<() => void>(),
            removeListener: vi.fn<() => void>(),
            addEventListener: vi.fn<() => void>(),
            removeEventListener: vi.fn<() => void>(),
            dispatchEvent: vi.fn<() => boolean>(),
          }) as unknown as MediaQueryList,
      ),
    });
  });

  it('renders the core application successfully', async () => {
    render(<App />);
    // Check for presence of the brand tagline or hero heading after loader resolves
    expect(await screen.findByText(/Engineering Total Climate/i)).toBeDefined();
  });

  it('renders the ContactForm and confirms target email recipient is andrew.bove@aboveallfla.com', () => {
    render(
      <AppThemeProvider>
        <ContactForm title='Test Request' subtitle='Test Subtitle' />
      </AppThemeProvider>,
    );

    // Verify fields exist
    expect(screen.getByLabelText(/Full Name/i)).toBeDefined();
    expect(screen.getByLabelText(/Phone Number/i)).toBeDefined();
    expect(screen.getByLabelText(/Email Address/i)).toBeDefined();
    expect(screen.getByLabelText(/Project Details/i)).toBeDefined();

    // Verify recipient disclaimer text
    expect(screen.getByText(/andrew.bove@aboveallfla.com/i)).toBeDefined();
  });

  it('triggers mailto dispatch on ContactForm submission', () => {
    // Mock window.location
    const originalLocation = window.location;
    // @ts-expect-error - mock location
    delete window.location;
    window.location = { href: '' } as unknown as Location;

    render(
      <AppThemeProvider>
        <ContactForm />
      </AppThemeProvider>,
    );

    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: 'John Smith' },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: '555-123-4567' },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Project Details/i), {
      target: { value: 'Need AC unit service' },
    });

    const submitBtn = screen.getByRole('button', { name: /Send Service Request/i });
    fireEvent.click(submitBtn);

    // Verify location href was set to mailto:andrew.bove@aboveallfla.com
    expect(window.location.href).toContain('mailto:andrew.bove@aboveallfla.com');
    // Verify confirmation screen is shown
    expect(screen.getByText(/Thank You, John Smith!/i)).toBeDefined();

    window.location = originalLocation;
  });

  it('renders base elements with custom variants', () => {
    render(
      <AppThemeProvider>
        <Button customVariant='primary-orange'>Orange CTA</Button>
        <Button customVariant='primary-navy'>Navy Action</Button>
        <Card accentBorderTop>Card Content</Card>
        <Badge label='24/7 RAPID DISPATCH' customTone='emergency' />
        <ThemeToggle />
      </AppThemeProvider>,
    );

    expect(screen.getByText('Orange CTA')).toBeDefined();
    expect(screen.getByText('Navy Action')).toBeDefined();
    expect(screen.getByText('Card Content')).toBeDefined();
    expect(screen.getByText('24/7 RAPID DISPATCH')).toBeDefined();
  });
});
