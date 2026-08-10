import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Test files location
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Prevent test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests on CI
  retries: process.env.CI ? 2 : 0,

  // Workers configuration
  workers: process.env.CI ? 1 : undefined,

  // Test report
  reporter: 'html',

  // Shared settings
  use: {

    // Open browser while running tests
    headless: false,

    // Collect trace for failed tests
    trace: 'on-first-retry',
  },


  // Browsers to run tests on
  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],

});