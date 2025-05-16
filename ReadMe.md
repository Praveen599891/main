# Framework Structure

## Parallel Testing
1. Set workers: process.env.CI ? 10 : undefined, <br />
inside playwright.config.ts file to initiate test cases execution in parallel<br/>
                 OR<br/>
2. test.describe.configure({mode : 'parallel'})<br/>
OR<br/>
3. fullyparallel : true <br />
set fullyparallel:true inside projects.use for browser  options<br/><br/>

## Retry Mechanism
 Add retries to browser option in playwright.config.ts file to retry if test case failed due to flaky<br/>
 ```javascript
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
  ```

## Cross Browser testing
Add browser and capabilities required for each browser inside playwright.config.ts as below
```javascript
 projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
      fullyParallel: true,
      retries: 3,
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      fullyParallel: true,
      retries:3
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      fullyParallel:true,
      retries:3
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
      fullyParallel:true,
      retries:3
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
      fullyParallel:true,
      retries:3
    },

    /* Test against branded browsers. */
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],

```

## Code Quality
## API Mocking / Stubing
## Documenting
 Refer Readme.md file(this file for reference of documentation about framework)<br/><br/><br/><br/>

## Reporting / Logging
Install @playwright/test allure-playwright
Then add reporter config inside defaultconfig

```javascript
  npm install --save-dev@playwright/test allure-playwright 
  reporter: [["line"], ["allure-playwright"]], 
  ```

<br/>

## CI/CD Integration


## Reusable Utilities
## Environment Management
## Data parameterization
## Credentials Encryption
## Version Control
## Self healing

## Test Data Generation
## Test Evidences








<br/>
<br/>
<br/>
<br/>
<br/>
<br/>














# Actions

### maximize Window <br /> 
option 1 :  
 ```javascript 
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
  ```  
  option 2 :<br /> 
 ```javascript 
 const screenWidth = 1536; // Replace with actual screen width
const screenHeight = 816; // Replace with actual screen height

    await this.page.setViewportSize({
      width: screenWidth,
      height: screenHeight,
    });
 ```
 <br/>


<!-- ![screenshot](.\\reference\\maximize.png) -->

### Scrolling

1. Hover <br/>
  ```javascript await page.getById("submit").hover();  ``` <br/>
<br/>
2. ScrollIntoViewIfNeeded() <br/>
 ```javascript 
 await page.getById("submit).scrollIntoViewIfNeeded(); 
 ```
<br/>
<br/>

### Waits
1. Wait For URL to Load
 ```javascriptawait page.waitForURL("https://www.google.com");``` this will wait until the page of the url is loaded.
2. Wait for Timeout 
 ```javascriptawait page.WaitForTimeOut(10000);``` waits untill 10000 milli seconds randomly without performing any actions.

### Drag and Drop











#Project
1. Project uses esm module for the whole project