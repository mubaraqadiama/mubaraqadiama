let countEl=document.getElementById("count-el");
let saveEl= document.getElementById( "save-el")
let count = 0;
function increment() {
   count = count + 1
   countEl.innerText = count;
}
   function save(){
      let countstr= count+ "- "
      saveEl.innerText += countstr
      countEl.innerText=0
      count = 0
      
   }



    
//let count = 0;
//const countEl = document.getElementById("count-el");

//function increment() {
    //count=count + 1;
    //countEl.innerText = count;

let firstName= "Muhammad";
let lastName= "Mubaraq";
let fullName= firstName + lastName;