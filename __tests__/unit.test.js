// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1,2)).toBe(3);
// });

//Function 1: isPhoneNumber
test('Check if phone number valid:', () => {
    expect(functions.isPhoneNumber("858-218-4637")).toBe(true);
    expect(functions.isPhoneNumber("858-218-5212")).toBe(true);
    expect(functions.isPhoneNumber("858")).toBe(false);
    expect(functions.isPhoneNumber("33456")).toBe(false);
});


test('Check if email is valid:', () => {
    expect(functions.isEmail("abcd@gmail.com")).toBe(true);
    expect(functions.isEmail("akk@google.com")).toBe(true);
    expect(functions.isEmail("858")).toBe(false);
    expect(functions.isEmail("ggc@e")).toBe(false);
});

test('Check if password is valid:', () => {
    expect(functions.isStrongPassword("a1234J")).toBe(true);
    expect(functions.isStrongPassword("AVASD123")).toBe(true);
    expect(functions.isStrongPassword("855676")).toBe(false);
    expect(functions.isStrongPassword("ggc@^%&*^e123124124124124124***")).toBe(false);
});

test('Check if date is valid:', () => {
    expect(functions.isDate("1/2/2222")).toBe(true);
    expect(functions.isDate("05/05/2015")).toBe(true);
    expect(functions.isDate("01/20/22")).toBe(false);
    expect(functions.isDate("0/2/12")).toBe(false);
});

test('Check if hex is valid:', () => {
    expect(functions.isHexColor("#ACC")).toBe(true);
    expect(functions.isHexColor("#111111")).toBe(true);
    expect(functions.isHexColor("A")).toBe(false);
    expect(functions.isHexColor("#12442515")).toBe(false);
});