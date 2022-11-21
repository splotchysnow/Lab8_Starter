# Lab 8 - Starter
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
- I would use number 1 and number 2, but mainly number 1 within a github action that runs whenever the code is pushed. this is because this would prevent the bad code being pushed that could cause a probelm for the branches / codes later on. By doing it in github actions, we can ensure that the code we passes through push is guarenteed to pass the unit test.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
- no, because the end-to-end check is used to check if the emulation of user action from start to finish is working properly. its less about the testing functions which is Unit test and more about the uesr experiences and web is deisnged as how we expect it to function.

