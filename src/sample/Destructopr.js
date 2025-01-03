let a, b, rest;

({A, B, ...rest} = {a : 10, b : 20, c : 30, d : "abcd"});

console.log(A);

console.log(B);

console.log(rest);


function f(x){
  x = 20;
}

function f2(x){
  x.a = 20;
}

let val = {a:10};
f2(val);

let value = 10;
f(value);

console.log(value);
console.log(val);