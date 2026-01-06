console.log("HelloArunkumaran");

let a=["Hello","All",true,null];
console.log(a);
let c=a;
c[2]="Double";
console.log(c);
console.log(a);

let b ={name:"Arunkumaran",subject:"Frontend",class:"Javascript"};
// Object.freeze(b);     //Cant update and can't add objects
Object.seal(b);          //Can update  and can't add objects
b["subject"]="Backend";
b["Phone"]="88736784";
// console.log(Object(b));

let d=0.2+0.1;
let k=2;
console.log(k + k++ + ++k + k++);

k = k**5;
// console.log(k);

// console.log(Object.keys(b));
// console.log(Object.values(b));
// console.log(Object.entries(b));

// Open cmd on Explorer
// npm create vite@latest --template app1
// cd app1
// npm install
// npm run dev
// WindowsPowerShell--> RunAsAdministrator -> set-executionpolicy remotesigned


// Right click on folder from explore 
// open --> git bash here 
// git init (first time)
// git add .
// git commit -m "your message"
// git branch -m main (first time)
// git remote add origin your_github_repo_url  (first time)
// git push -u origin main

// if required
// git config -g --user.mail=""
// git config -g --user.password=""