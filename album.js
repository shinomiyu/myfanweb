// JavaScript Document
// MENU OPEN CLOSE

// MENU

const menuBtn = document.getElementById("menuBtn");

const menuOverlay = document.getElementById("menuOverlay");



menuBtn.addEventListener("click",()=>{


if(menuOverlay.style.display==="block"){


menuOverlay.style.display="none";


}

else{


menuOverlay.style.display="block";


}


});




// DROPDOWN


const dropdownButtons=document.querySelectorAll(".drop-btn");



dropdownButtons.forEach(button=>{


button.addEventListener("click",(e)=>{


e.preventDefault();


button.parentElement.classList.toggle("active");


});


});

const audio = document.getElementById("homepageAudio");
const btn = document.getElementById("audioBtn");

btn.addEventListener("click", function(){

    if(audio.paused){

        audio.play();
        btn.innerHTML="❚❚";

    }else{

        audio.pause();
        btn.innerHTML="▶";

    }

});
document.querySelectorAll(".album").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.zIndex=10;

});

card.addEventListener("mouseleave",()=>{

card.style.zIndex=1;

});

});