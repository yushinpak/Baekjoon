const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    
    str = input[0];
    n = Number(input[1]);
    
    const arr = [];
    
    for ( let i = 1; i <= n; i++) {
        arr.push(str)
    }
    
    console.log(arr.join(''))
    
});