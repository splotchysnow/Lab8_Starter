# run the terminal command:
```
npm -v
```
*Checks if you have the node package manager npm installed, this tool allows you to access and download resources.*

# Run this command:
```
npm install --save-dev jest babel-jest @babel/core @babel/preset-env puppeteer jest-puppeteer
```
this installs jest.

- add hte new node_modueles directory to .gitignore file to prevent bloat commited to repository.

# Configuring Jest and Puppeteer:
- configure the script to run jest in package.json.
- Tells the interpreter to read the jest command when run 
```
npm run test
```
---
```
"scripts": {
    "test": "jest"
}
```
# package.json file, inside JSON object at top level. add this.
```
"jest": {
  "preset": "jest-puppeteer",
  "verbose": true
}
```