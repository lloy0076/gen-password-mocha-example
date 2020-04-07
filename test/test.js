const { expect } = require('chai');
const path = require('path');
const child = require('child_process');

const exec = path.join(__dirname, '..', 'index.js');

// eslint-disable-next-line no-undef
describe('test help', () => {
    // eslint-disable-next-line no-undef
    it('Help should be displayed', (done) => {
        const proc = child.spawn('node', [exec, '-h']);

        let result = '';
        proc.stdout.on('data', (line) => { result += line.toString(); });

        // This isn't perfect but it will at minimum catch any errors.
        proc.stdout.on('end', () => {
            expect(result).to.match(/The prefix\./);
            expect(result).to.match(/Display this help\./);
            expect(result).to.match(/memorable/);
            expect(result).to.match(/The password length\./);
            expect(result).to.match(/Should the password be memorable\?/);
            expect(result).to.match(/Number of passwords to generate\./);
            expect(result).to.match(/Pattern to match/);
            done();
        });
    });
});

describe('test password', () => {
    it('Test default settings', (done) => {
        const proc = child.spawn('node', [exec]);

        proc.stdout.once('data', (password) => {
            const passwordString = password.toString();
            expect(passwordString).to.match(/^\w{12}[\n]$/,
                'Password should contain contain 12 word characters followed by a single new line');

            done();
        });
    });

    it('Test length 6', (done) => {
        const proc = child.spawn('node', [exec, '-l', '6']);

        proc.stdout.once('data', (password) => {
            const passwordString = password.toString();
            expect(passwordString).to.match(/^\w{6}[\n]$/,
                'Password should contain contain 6 word characters followed by a single new line');

            done();
        });
    });

    it('Test pattern [ab]', (done) => {
        const proc = child.spawn('node', [exec, '-p', '[ab]']);

        proc.stdout.once('data', (password) => {
            const passwordString = password.toString();
            expect(passwordString).to.match(/^[ab]{12}[\n]$/,
                'Password should contain contain 12 characters from class [ab] followed by a single new line');
            done();
        });
    });

    it('Test prefix "test-"', (done) => {
        const proc = child.spawn('node', [exec, '-b', 'test-']);

        proc.stdout.once('data', (password) => {
            const passwordString = password.toString();
            expect(passwordString).to.match(/^test-[\w]{7}[\n]$/,
                'Password should contain contain 12 characters beginning with test- and followed by a single new line');
            done();
        });
    });

    it('Test memorable password', (done) => {
        const proc = child.spawn('node', [exec, '-m', '-l', 4]);

        proc.stdout.once('data', (password) => {
            const passwordString = password.toString();
            expect(passwordString).to.match(/^[a-z][aeiou][a-z][aeiou]\n/, 'Password should be memorable');
            done();
        });
    });

    it('Test generating 4 passwords', (done) => {
        const expecting = 4;
        const proc = child.spawn('node', [exec, '-n', expecting]);

        let count = 0;
        let passwords = '';

        const expectingLength = 4 * 13;

        proc.stdout.on('data', (password) => {
            count += 1;

            const passwordString = password.toString();
            expect(passwordString).to.match(/^\w{12}[\n]$/,
                `Password ${count} should contain contain 12 word characters followed by a single new line`);

            passwords += password;
        });

        proc.stdout.on('end', () => {
            expect(count).to.equal(expecting);

            expect(passwords).to.be.a('string');
            expect(passwords).to.have.length(expectingLength,
                `The concatenated passwords should be ${expectingLength} long.`);

            done();
        });
    });
});
