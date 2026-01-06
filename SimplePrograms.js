
//Adding Even numbers in Array
let Arr=[0,1,1,2,3,4,5,6,12,15,26,17]
    Arr=(Arr.filter((e,i,k)=>{ return e%2==0})).reduce((p,e,i,k)=>{ return p+e},0)
    console.log(Arr)
// Remove Duplicate number from Array
let Arr2=[1,1,2,3,4,5,6,2,5]
    Arr2=Arr2.filter((e,i,k)=>{ return Arr2.indexOf(e)==Arr2.lastIndexOf(e)})
        Arr3=Arr2.filter((e,i,k)=>{ return Arr2.indexOf(e)===i})
    console.log(Arr2,Arr3)
//Reverse Every words in String
let StrArr="Html Css Bootstrap JavaScript React";
        StrArr=(StrArr.split(" ")).map((e,i,k)=> { return e.split("").reverse().join('') }).join(" ")
   console.log(StrArr);

//  finding Repeated count array elements 
let a=[1,3,6,9,12,15,6,9,3,6,9];
let b={};
let k=a.length;
for (let i=0;i<k;i++){
    if(b[a[i]])
       b[a[i]]=b[a[i]]+1;
    else
        b[a[i]]=1;
}
console.log(b);


//  Finding HappyNumber or not
let input=8;
let StackArray=[];

do{
    StackArray.push(input);
    input**=2;
    let Addedon=0;
       for(let i=0;input>0;i++){
            Addedon+=input%10;
            input=parseInt(input/10);
          }
    input = Addedon;
    console.log(StackArray);

}while(!StackArray.includes(input));

    if(input==1)
       console.log(StackArray[0],"is a HappyNumber");
    else
       console.log(StackArray[0],"is Not a HappyNumber");

//Finding given input is array or string or Number or Object
 a={name:"Arun",class:"Javascript"};
 a=67890;
 a="I am the student in Besent Technologies Porur";
 a=[5,6,3,4,1,9,2,0];

 FindTypeof(a);

 function FindTypeof(a){
   if (typeof a == "number"){
      b=a;
      j=0;
        for(i=0;b>0;i++){
          j=j+b%10;
          b=parseInt(b/10);
        }
      console.log("Its Number value and Addon number is = ",j)
      }
   else if (typeof a == "string"){
      b=a.split(" ");
      console.log("Tts String value and the words are = ",b)
   }
   else if (typeof a == "object" && Array.isArray(a) == true ){
       b=a.sort((a,b)=>{return a-b});
       console.log("Tts Array value and the sorted array is = ",b)
   }
   else if (typeof a == "object" && Array.isArray(a) == false) 
      console.log(a," is Object value")
  }    