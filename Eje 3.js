// Factorial-while.js
let x = 10;
var i = x-1;

while(i > 1){
    x *= i;
    i--;
}
console.log(x);

// Factorial-break.js

let r = 10;
var i = x-1;

while(r){
    r *= i;
    
    i--;
    if (i <= 1) break;
}

console.log(r);

// Factorial-for.js

const dato = 7; // Número del que queremos calcular el factorial
let z = 1;
for(let i = dato; i>0; i--){
    z *= i;
}
console.log(z);

