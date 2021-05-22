let userInput: unknown;
// let userInput: any;
let userName: string;

userInput = 4;
userInput = 'max';
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(msg: string, code: number): never {
    throw {
        msg: msg,
        errorCode: code
    };
}
const result = generateError('An Error occured!', 500);
console.log(result);