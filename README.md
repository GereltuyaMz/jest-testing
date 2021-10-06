# Getting Started
Install node modules using `yarn`

```bash
yarn install
```

Or [`npm`](https://www.npmjs.com/package/jest):

```bash
npm install
```
## Command to start

```bash
yarn test
```

## To add HTML based test reports

Add node package for jest-html-reporter using the below command.

```bash
npm install --save-dev jest-html-reporter
```

Now add Jest configuration for the reporter in the package.json file of the node project.

```bash
"jest": {
   "reporters": [
     "default",
     [
       "./node_modules/jest-html-reporter",
       {
         "pageTitle": "Test Report"
       }
     ]
   ]
 }
```

## To add coverage report
Add Jest configuration for the reporter in the package.json file of the node project.
```bash
"scripts": {
    "test": "jest --coverage"
  }
```
