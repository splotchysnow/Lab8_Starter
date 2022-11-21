# Lab 8 - Starter

Name: Guan Li

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
- I would use github action to fit my automated test in Recipe project development pipeline beceause that way it prevents people from dropping in bad code and that all codes must pass those automated tests to be able to have access to be pushed.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
- no, because the end-to-end check is used to check if the emulation of user action from start to finish is working properly. its less about the testing functions which is Unit test and more about the uesr experiences and web is deisnged as how we expect it to function.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
- No because this feature sounds more like a feature to be tested with E2E, However it is not impossible to test with unit test to see if the messages were sent.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
- Yes Unit test can handle this easily.

- For screenshot check screenshot # 1, 2 and screenshot.md