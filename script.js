


/*----------------------toggle navbar -------------------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

/* close nav when clicking ona nav iter*/
document.addEventListener("click", function(e){
    if(e.targer.closest(".nav-item")){
        toggleNav();

    }
});

/*-----------------------sticky header ----------------------*/
window.addEventListener("scroll", function(){
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    }
    else{
        document.querySelector(".header").classList.add("sticky");
    }
});
