import { test, expect } from '@playwright/test';

test('homepage displays Above All HVAC branding', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Above All HVAC/i);
});
