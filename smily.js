const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output }); 

/**
 * 
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */
const countSmilyFace = (text) => {
    const response = [];
    const eye = [":", ";"];
    const nose = ["-", "~"];
    const mouth = [")", "D"];
    
    for (const obj of text) {
        //console.log(obj);
        if(obj.length === 2 && eye.includes(obj[0]) && mouth.includes(obj[1])) {
            // Check case eye and mouth
            //console.log(obj);
            response.push(obj);
        } else if(obj.length === 3 && eye.includes(obj[0]) && nose.includes(obj[1]) && mouth.includes(obj[2])) {
            // Check all 
            //console.log(obj);
            response.push(obj);
        }/* else {
            console.log('else')
        }*/
    }
    return response.length;
}

const run = () => {
    // I/O
    rl.question('Please Input Array Smile Example [":)", ":(", ":>"] : ', (input) => {
        const result = countSmilyFace(JSON.parse(input));

        console.log(`Result: ${result}`);

        rl.close();
    });
}

if (require.main === module) {
    run();
} else {
    module.exports = {
        countSmilyFace
    }
}