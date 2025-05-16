import { PlaywrightTestConfig,devices } from '@playwright/test';

const config: PlaywrightTestConfig = {

 
   /* Configure projects for major browsers */
   projects: [
     {
       name: "chromium",
       use: {
         ...devices["Desktop Chrome"],
       },
       fullyParallel: true,
       retries: 3,
        },
    ]
};

export default config;