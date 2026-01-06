
let a=[1,2,3,4,5,-1,6,0,10,7,8,9,0];

let b= a.sort((a,b)=>{return a-b;});
let b1= a.sort((a,b)=>{return b-a;});

let b2=a.map    ((e,i,k)  =>{return e*5});
let b3=a.filter ((e,i,k)  =>{return e>0});   // returns boolean
let b4=a.some   ((e,i,k)  =>{return e>5});
let b5=a.every  ((e,i,k)  =>{return e>5});
let b6=a.find   ((e,i,k)  =>{return e>7});
let b7=a.flatMap((e,i,k)  =>{return [e]});
let b8=a.reduce ((p,e,i,k)=>{
    return p+e
},1000);

console.log(b);

