import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { Button, Card, Badge, ThemeToggle, LogoEmblem } from '../elements';
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
    // Check that SectorsShowcase is rendered
    expect(await screen.findByRole('tab', { name: /Residential/i })).toBeDefined();
    expect(await screen.findByRole('tab', { name: /Commercial/i })).toBeDefined();
    expect(await screen.findByRole('tab', { name: /Industrial/i })).toBeDefined();
  });

  it('renders the ContactForm and confirms target email recipient is info@aboveallfla.com', () => {
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
    expect(screen.getByText(/info@aboveallfla.com/i)).toBeDefined();
  });

  it('triggers mailto dispatch on ContactForm submission', () => {
    const originalLocation = window.location;
    Object.defineProperty(window, 'location', {
      writable: true,
      configurable: true,
      value: { href: '' } as unknown as Location,
    });

    render(
      <AppThemeProvider>
        <ContactForm />
      </AppThemeProvider>,
    );

    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: 'John Smith' },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: '407-773-4719' },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Project Details/i), {
      target: { value: 'Need AC unit service' },
    });

    const submitBtn = screen.getByRole('button', { name: /Send Service Request/i });
    fireEvent.click(submitBtn);

    // Verify location href was set to mailto:info@aboveallfla.com
    expect(window.location.href).toContain('mailto:info@aboveallfla.com');
    // Verify confirmation screen is shown
    expect(screen.getByText(/Thank You, John Smith!/i)).toBeDefined();

    Object.defineProperty(window, 'location', {
      writable: true,
      configurable: true,
      value: originalLocation,
    });
  });

  it('validates individual form elements on submit and displays specific error messages', () => {
    render(
      <AppThemeProvider>
        <ContactForm />
      </AppThemeProvider>,
    );

    const submitBtn = screen.getByRole('button', { name: /Send Service Request/i });
    fireEvent.click(submitBtn);

    // Verify individual field validation errors appear
    expect(screen.getByText(/Full name or company name is required/i)).toBeDefined();
    expect(screen.getByText(/Please enter a valid phone number/i)).toBeDefined();
    expect(screen.getByText(/Please enter a valid email address/i)).toBeDefined();
    expect(screen.getByText(/Please provide project details/i)).toBeDefined();

    // Verify aria-invalid on fields
    const nameInput = screen.getByLabelText(/Full Name/i);
    expect(nameInput.getAttribute('aria-invalid')).toBe('true');
  });

  it('validates individual elements on blur and clears errors when corrected', () => {
    render(
      <AppThemeProvider>
        <ContactForm />
      </AppThemeProvider>,
    );

    const emailInput = screen.getByLabelText(/Email Address/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email-string' } });
    fireEvent.blur(emailInput);

    // Email should show individual validation error
    expect(screen.getByText(/Please enter a valid email address/i)).toBeDefined();
    expect(emailInput.getAttribute('aria-invalid')).toBe('true');

    // Name should not yet show an error because it has not been touched
    expect(screen.queryByText(/Full name or company name is required/i)).toBeNull();

    // Fix the email
    fireEvent.change(emailInput, { target: { value: 'valid@aboveallfla.com' } });
    expect(screen.queryByText(/Please enter a valid email address/i)).toBeNull();
  });

  it('renders base elements with custom variants and the SVG LogoEmblem', () => {
    render(
      <AppThemeProvider>
        <Button customVariant='primary-orange'>Orange CTA</Button>
        <Button customVariant='primary-navy'>Navy Action</Button>
        <Card accentBorderTop>Card Content</Card>
        <Badge label='24/7 RAPID DISPATCH' customTone='emergency' />
        <ThemeToggle />
        <LogoEmblem size={120} />
      </AppThemeProvider>,
    );

    expect(screen.getByText('Orange CTA')).toBeDefined();
    expect(screen.getByText('Navy Action')).toBeDefined();
    expect(screen.getByText('Card Content')).toBeDefined();
    expect(screen.getByText('24/7 RAPID DISPATCH')).toBeDefined();
    expect(screen.getByLabelText(/Above All HVAC Stylized A Emblem/i)).toBeDefined();
  });
});
