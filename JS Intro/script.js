// console.log("First Program");

// console.log(document.body.style.background="pink");

// window.setTimeout(function(){
//     document.body.style.backgroundColor="brown";
// },5000);

// window.setInterval(function(){
//     document.body.innerHTML=`<h1>${new Date()}</h1>`
// },1000);

// window.alert("Hello World");


// const result =window.confirm("Are You Sure?");
// console.log(result);

// const result2 =window.prompt("what is your name?");
// console.log(result);




// JS selector

//const title = document.getElementById("title");
//title.style.fontSize="60px";

// const title = document.getElementsByClassName("red");
// title[0].style.fontSize="60px";

// const firstList = document.querySelector(".red");
// firstList.style.color = "purple";

// const firstList = document.querySelectorAll(".red");

// firstList.forEach(function(item){
//     item.style.color='red';
// })




//Events
// document.addEventListener("click",function(){
//     console.log("You pressed Clicked");
// });

// const button = document.querySelector('button');

// button.addEventListener("click",function(event){
//     console.log(event.target);
//     document.body.style.background = "purple";
// })
   
const button = document.querySelector('button');

document.addEventListener("keyup",function(event){
    console.log(event);
    document.body.style.background = "purple";
})
   