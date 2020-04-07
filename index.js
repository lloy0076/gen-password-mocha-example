const getOpt = require('node-getopt');
const generatePassword = require('password-generator');

const optionConfig = [
    ['b', 'prefix=[ARG]', 'The prefix.'],
    ['h', 'help', 'Display this help.'],
    ['l', 'length=[ARG]', 'The password length.'],
    ['m', 'memorable', 'Should the password be memorable?'],
    ['n', 'number=[ARG]', 'Number of passwords to generate.'],
    ['p', 'pattern=[ARG]', 'Pattern to match.'],
];

const parsedOptions = getOpt.create(optionConfig)
    .bindHelp()
    .parseSystem();

const { options } = parsedOptions;

const memorable = !!options.memorable;
const length = options.length ? options.length : 12;
const pattern = options.pattern ? options.pattern : null;
const prefix = options.prefix ? options.prefix : null;

let number = 1;
if (options.number) {
    try {
        number = Number.parseInt(options.number, 10);
    } catch (error) {
        console.error(`Invalid number ${options.number} - default to '1'.`);
    }
}

if (number < 1) {
    number = 1;
}

for (let i = 0; i < number; i += 1) {
    console.log(generatePassword(length, memorable, pattern, prefix));
}
