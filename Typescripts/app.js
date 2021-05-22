var userInput;
// let userInput: any;
var userName;
userInput = 4;
userInput = 'max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(msg, code) {
    throw {
        msg: msg,
        errorCode: code
    };
}
var result = generateError('An Error occured!', 500);
console.log(result);
