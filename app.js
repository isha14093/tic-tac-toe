let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".btn")
let message = document.querySelector(".message")
let para = document.querySelector(".text")
let btn_new = document.querySelector(".new-game")
let win =[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]]

let turn1 = true;
let count = 0
boxes.forEach((box) => 
{
   box.addEventListener("click",()=>{
    
    if(turn1)
    {
        console.log("box was clicked");
        box.innerText="X"
        box.style.color=" #854D27"
        turn1= false
    }
    else{
        console.log("box was clicked");
        box.innerText="O"
        turn1=true;
    }
    box.disabled=true
    count++
    let result =final();
    if(count==9 && !result)
    {
        drawn();
    }
    
   })
});

let msg= (winner)=>
{
        para.innerText=`Congratulations..! The Winner is ${winner}`
    message.classList.remove("hide")
    disableBox();
  
}

let final = ()=>{
 for (let winner of win)
{
   let pos1 = boxes[winner[0]].innerText 
   let pos2 = boxes[winner[1]].innerText 
   let pos3 = boxes[winner[2]].innerText 
 if(pos1!=""&&pos2!=""&&pos3!="")
 {
    if(pos1==pos2&&pos2==pos3)
    {
        console.log("Winner".pos1)
        msg(pos1);
    }
 }
}
}
let disableBox = () =>
{
for(let box of boxes)
{
    box.disabled=true;
}
}
let enablebox = ()=>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }
}
 let resetgame = ()=>
 {
    turn1= true;
    enablebox();
    message.classList.add("hide")
    
 }


 btn_new.addEventListener("click",()=>
 {
    resetgame();
 })


 reset.addEventListener("click",()=>
 {
    resetgame();
 })
 let drawn = ()=>
 {
      para.innerText="OHOH Game is drawn .\n Ek or ho jaye.! 😉"
      message.classList.remove("hide")
      disableBox();

 }