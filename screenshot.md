PS C:\Users\a1493\OneDrive\Documents\GitHub\Lab8_Starter> npm run test

> test
> jest

 PASS  __tests__/sum.test.js
  √ adds 1 + 2 to equal 3 (3 ms)
  √ adds 1 + 2 to equal 3 (1 ms)                                                                                                                                                 
                                                                                                                                                                                 
 PASS  __tests__/unit.test.js                                                                                                                                                    
  √ Check if phone number valid: (2 ms)                                                                                                                                          
  √ Check if email is valid: (2 ms)                                                                                                                                              
  √ Check if password is valid: (2 ms)                                                                                                                                           
  √ Check if date is valid: (1 ms)                                                                                                                                               
  √ Check if hex is valid: (2 ms)                                                                                                                                                
                                                                                                                                                                                 
  console.log                                                                                                                                                                    
    Checking for 20 product items...

      at Object.log (__tests__/lab8.test.js:10:13)

  console.log
    Checking to make sure <product-item> elements are populated...

      at Object.log (__tests__/lab8.test.js:21:13)

  console.log
    Checking product item 1/20

      at Object.log (__tests__/lab8.test.js:27:13)

  console.log
    Checking the "Add to Cart" button...

      at Object.log (__tests__/lab8.test.js:48:13)

  console.log
    Checking number of items in cart on screen...

      at Object.log (__tests__/lab8.test.js:76:13)

  console.log
    Checking number of items in cart on screen after reload...

      at Object.log (__tests__/lab8.test.js:98:13)

  console.log
    Checking number of items in cart on screen...

      at Object.log (__tests__/lab8.test.js:150:13)

  console.log
    Checking number of items in cart on screen after reload...

      at Object.log (__tests__/lab8.test.js:173:13)

  console.log
    Checking the localStorage...

      at Object.log (__tests__/lab8.test.js:214:13)

 PASS  __tests__/lab8.test.js (18.447 s)
  Basic user flow for Website
    √ Initial Home Page - Check for 20 product items (278 ms)                                                                                                                    
    √ Make sure <product-item> elements are populated (1353 ms)                                                                                                                  
    √ Clicking the "Add to Cart" button should change button text (312 ms)                                                                                                       
    √ Checking number of items in cart on screen (5058 ms)                                                                                                                       
    √ Checking number of items in cart on screen after reload (2197 ms)                                                                                                          
    √ Checking the localStorage to make sure cart is correct (31 ms)                                                                                                             
    √ Checking number of items in cart on screen after removing from cart (5385 ms)                                                                                              
    √ Checking number of items in cart on screen after reload (2239 ms)                                                                                                          
    √ Checking the localStorage to make sure cart is correct (30 ms)

Test Suites: 3 passed, 3 total
Tests:       16 passed, 16 total
Snapshots:   0 total
Time:        19.42 s, estimated 29 s
Ran all test suites.