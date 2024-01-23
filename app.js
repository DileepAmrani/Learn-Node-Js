const fs = require('fs');

// READING AND WRITTING FILES
const textIn = fs.readFileSync("./files/input.txt", 'utf-8');
console.log(textIn);

let content = `Data read from input.txt: ${textIn} \n Data created ${new Date}`;
fs.writeFileSync("./files/output.txt", `${content}`)