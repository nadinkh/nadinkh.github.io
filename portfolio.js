const GITHUB_URL = "https://github.com/nadinkh";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });


  
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function about(){
  
  let currentlySelected=0;
  const nodes=document.querySelectorAll(".location");
  const prevBtn=document.querySelector(".prev");
  const nextBtn=document.querySelector(".next");
  
  function previous(){
    nextBtn.disabled=false;
    nodes[currentlySelected].classList.remove("active");
    currentlySelected--;
    nodes[currentlySelected].classList.add("active");
    
    if(currentlySelected===0){
      prevBtn.disabled=true;
     
    }
    }
    
    function next(){
  
    prevBtn.disabled=false;
    nodes[currentlySelected].classList.remove("active");
    currentlySelected++;
    nodes[currentlySelected].classList.add("active");
    
    if(currentlySelected!==0){
      nextBtn.disabled=true;
    
    }
    }
    function init(){
      prevBtn.addEventListener("click",function(){
        previous();
      });
      
      nextBtn.addEventListener("click",function(){
        next();
      });
    }
    init();}

    

 
  function sConsole(event) {
    event.preventDefault();
    let name = document.getElementById("name");
  console.log("First name: " + first.value);
  console.log("Last name: " +last.value);
  console.log("Email: "+ email.value);
  console.log("Comment: " + comments.value);
  console.log("Additional Info: " + additional.value);
  }
  


function contact (){
  submitForm.addEventListener('input',()=>{

    if(first.value.length >0 &&
       last.value.length >0 &&
       email.value.length >0 &&
       comments.value.length >0 &&
       additional.value.length >0) {
        SubmitBtn.removeAttribute('disabled');
       } 
       else {
        SubmitBtn.setAttribute('disabled','disabled');
       }
    
    
    });}

  




