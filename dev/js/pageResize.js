import { gsap } from "gsap";

let main = document.querySelector("main");
let mainTL = gsap.timeline({paused:true});
    mainTL.to(".grey",{duration:0.5, backgroundColor:"#111111"},"change")
    .to(main,{duration:0.5, scale:0.75, x:"+=100", transformOrigin: "center right"},"change");

let hiddenMenuTL = gsap.timeline({paused:true});
    hiddenMenuTL.from(".hiddenMenuLink",{duration:0.5, x:"+=50", alpha:0, stagger:0.25},"+=0.5");


export function movePage(isOpen){
    console.log("here");
    if (isOpen === false) {
        mainTL.play();
        hiddenMenuTL.play();
        gsap.set("#hidden",{zIndex:100});
    }else{
        mainTL.reverse();
        gsap.set("#hidden",{zIndex:-1});

    }
}