const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container")


window.addEventListener("scroll", ()=>{

   /*bottomContainerEl.offsetTop is the height in px from the top of the bottom container html element to the top of the website when scrolling up and navbarEl is the height in px of the navbar. 50 is the 50px added to and bottom of bottom container in css*/
   if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50 ){
    navbarEl.classList.add("active")
   }

   else{
    navbarEl.classList.remove("active")
   }
})