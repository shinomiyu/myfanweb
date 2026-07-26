// ================= MENU =================

const menu = document.getElementById("menuBtn");

const menuOverlay = document.getElementById("menuOverlay");



menu.addEventListener("click",()=>{

    if(menuOverlay.style.display === "block"){
        menuOverlay.style.display = "none";

    }

    else{


        menuOverlay.style.display = "block";


    }


});

// ================= DROPDOWN MENU =================

const dropdownButtons = document.querySelectorAll(".drop-btn");


dropdownButtons.forEach(button => {

    button.addEventListener("click", function(e){

        e.preventDefault();


        const dropdown = this.parentElement;


        dropdown.classList.toggle("active");


    });

});
/// ================= PLLI =================

const plli = document.getElementById("plli");


plli.addEventListener("click",(e)=>{

    e.preventDefault();

    window.open(
        "https://starshard-rush.port502.dev/game",
        "_blank"
    );

});

// ================= AUDIO =================

const audio = document.getElementById("homepageAudio");

const btn = document.getElementById("audioBtn");


btn.addEventListener("click",()=>{


    if(audio.paused){

        audio.play();

        btn.innerHTML="❚❚";


    }else{


        audio.pause();

        btn.innerHTML="▶";


    }

});