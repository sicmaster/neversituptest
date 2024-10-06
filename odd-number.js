const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output }); 

/**
 * 
 * @param {number[]} numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns {number} one number that odd number
 */
const findOddNumber = (text) => {
    const data = {};

    const total = text.length;
    //console.log('total', total)
    // Loop Array count number
    for (let i = 0; i < total; i++) { 
        if(data[text[i]]) {
            data[text[i]] += 1;
        } else {
            data[text[i]] = 1;
        }
    } 
    
    // Loop data by key and return key
    for (const k in data) {
        if (data[k] % 2 != 0) 
            return Number(k)
    }
    
    return 0;
}

const run = () => {
    // I/O
    rl.question('Please Input Array Number Example [1,1,2] : ', (input) => {
        const result = findOddNumber(input);

        console.log(`Result: ${result}`);
    
        rl.close();
    });
}

if (require.main === module) {
    run();
} else {
    module.exports = {
        findOddNumber
    }
}