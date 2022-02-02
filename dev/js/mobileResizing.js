import { gsap } from "gsap";

 export function displayWindowSize(){

     let menu = document.querySelector("#nav-container");
     let menuHeight = menu.offsetHeight;

     console.log(menuHeight);

    if(document.documentElement.clientWidth <= 1024){
        console.log("hide");
        gsap.set("#nav-container", {y:menuHeight});
    }else{
        console.log("un-hide");
        gsap.set("#nav-container",{y:0});
    }


 }