const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output }); 

/**
 * 
 * @param {string} text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
const manipulate = (text) => {
    //setup response
    let result = [];
    //console.log(text);

    // loop Text 
    for (let character of text) {
        // set first loop
        if(result.length === 0) {
            result.push(text[0])
        } else {
            // new text array
            let nt = [];
            // loop result for push new string
            for (let string of result) {
                // loop for insert string to all result text
                for (let i = 0; i <= string.length; i++) {
                    let ns = string.slice(0, i) + character + string.slice(i);
                    nt.push(ns);
                }
            }
            // new text array replace result
            result = nt; 
        }
    }

    // return result
    return result;
}
 
const run = () => {
    // I/O
    rl.question('Please Input Text : ', (inputText) => {
        const result = manipulate(inputText);

        console.log(`Result: ${result}`);
    
        rl.close();
    });
}

if (require.main === module) {
    run();
} else {
    module.exports = {
        manipulate
    }
}