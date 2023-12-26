const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
	
    const A = input[0]
    const B = input[1]
    
    if (A>B) {
        console.log('>')
    } else if (A<B) {
        console.log('<')
    } else {
        console.log('==')
    }
        
    process.exit();
});