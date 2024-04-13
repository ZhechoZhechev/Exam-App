const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
    await page.goto('https://zhechozhechev-regular-exam.onrender.com/Add-Product');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  