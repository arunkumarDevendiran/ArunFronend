
let a=[1,3,6,9,12,15,18,21,24,27,30];

a.push(4,5);
a.pop();
a.unshift(0);
a.shift();
a.splice(4,2);
a.splice(4,2,10);
a.copyWithin(4,1,3);
a.fill(10,2,5);
a.reverse();
a=a.flat(Infinity);         // let a=[1,3,6,9,[12,15,[18,21,24,27,30]]];
a=a.join("");
console.log(Array.isArray(a));
console.log(a);

let c="Hello java Script in java world java Script";

console.log(c);
console.log(c.replace("Hello","Vanakam"));
console.log(c.slice(3,15));
console.log(c.substring(3,13));
console.log(c.split(" "));
let d=c.split(" ");
console.log(d);
console.log(c.indexOf("java",0));
console.log(c.lastIndexOf("java"));
console.log(c.search(/o/i));
console.log(c.match(/J/ig));
console.log(c);
 console.log(Array.from(c.matchAll("o")));
console.log(c.includes("in"));
console.log(c.startsWith("Hel"));
console.log(c.endsWith("ipt"));
console.log(c.trim().length);
console.log(c.repeat(2));
console.log(c.padStart(c.length+3,"Mr."));

console.log(typeof(c));
console.log(isNaN(c));

let x='{"name":"Arunkumaran"}';
console.log(JSON.parse(x).name)
let y={name:"Arunkumaran"};
console.log(JSON.stringify(y))
