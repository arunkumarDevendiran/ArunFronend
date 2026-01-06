
function add(...t){        //Rest operator
  return t[0]+t[1];
}
let t=add(1,2);
console.log(t,"Function using Rest Operator");

let add1 = (a,b) => {
  console.log(a+b,"Arrow function");
}
add1(1,2);

(function(){
  console.log("Immediate invoke function expression")
})();

function first(s){
   s();
}
function Second(){
  console.log(" higherorder Function")
}
first(Second);

setTimeout(() => {
  console.log("Callback Queue timeout Function");
}, 3000);
  console.log("CallStack Function")

setInterval(() => {
  console.log("Callback Queue Interval Function");
}, 3000);
  console.log("CallStack1 Function")
