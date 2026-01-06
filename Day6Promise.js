
a=5
b=0
Obj={Id:"1",Name:"Besant"}

    function Getuserdata(){
     let prom=new Promise((res,rej)=>{
        if(a/b!="Infinity")
          res(Obj)
        else
          rej("Failed to fetch Data as Denomination is 0")
     })
     return prom
    }
     let prom1=Getuserdata()
         Promise.allSettled([prom1])
         .then((res)=>{setTimeout(()=>{console.log(res)},2000)})
         .catch((rej)=>{console.log(rej)})

   
         
let p=new Promise((res,rej)=>{
    if(2<1)
      res("promise responded")
    else
      rej("promise rejected")
});
let p1=new Promise((res,rej)=>{
    if(2>1)
      res("promise1 responded1")
    else
      rej("promise1 rejected")
});
console.log(p,"Promise pending");
Promise.allSettled([p,p1]).then((res)=>{
  console.log(res);
}).catch((rej)=>{
  console.log(rej);
})
console.log("Promise callings")