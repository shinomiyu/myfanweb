// ===========================
// MENU OPEN CLOSE

// MENU

const menuBtn = document.getElementById("menuBtn");
const menuOverlay = document.getElementById("menuOverlay");

menuBtn.onclick = function () {

    menuOverlay.classList.toggle("show");

};
// DROPDOWN


const dropdownButtons=document.querySelectorAll(".drop-btn");



dropdownButtons.forEach(button=>{


button.addEventListener("click",(e)=>{


e.preventDefault();


button.parentElement.classList.toggle("active");


});


});

// ===========================
// AUDIO
// ===========================


const audio = document.getElementById("homepageAudio");
const audioBtn = document.getElementById("audioBtn");


if(audio && audioBtn){


let playing = false;


audio.loop = true;



audioBtn.addEventListener("click",()=>{


    if(!playing){


        audio.play();


        audioBtn.innerHTML="❚❚";


        playing=true;


    }


    else{


        audio.pause();


        audioBtn.innerHTML="▶";


        playing=false;


    }


});


}





// ===========================
// SCROLL REVEAL
// ===========================


const revealElements = document.querySelectorAll(".reveal");



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add("active");


        observer.unobserve(entry.target);


    }


});


},{


threshold:0.15


});





revealElements.forEach(element=>{


    observer.observe(element);


});






// ===========================
// IMAGE ZOOM
// ===========================


const galleryImages = document.querySelectorAll(
".card img, .gift-card img"
);



galleryImages.forEach(img=>{

    img.addEventListener("click",(e)=>{

        if(!img.parentElement.matches("a")){

            img.classList.toggle("zoom");

        }

    });

});