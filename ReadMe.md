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


## Code Quality
## API Mocking / Stubing
## Documenting
 Refer Readme.md file(this file for reference of documentation about framework)<br/><br/><br/><br/>

## Reporting / Logging
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

