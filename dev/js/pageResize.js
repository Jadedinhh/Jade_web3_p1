import { gsap } from "gsap";

// gsap.set("#cover-up",{transformOrigin:"center left", scaleX:0, scaleY: 0.9});

let main = document.querySelector("main");
let mainTL = gsap.timeline({paused:true});
    mainTL.to(".grey",{duration:0.5, backgroundColor:"#fff"},"change")
    .to(main,{duration:0.5, x:"+=205", transformOrigin: "left"},"change");
    // .to("#cover-up", {duration: 0.5, scaleY:1, ease: "none"});
    

let hiddenMenuTL = gsap.timeline({paused:true});
    hiddenMenuTL.from(".hiddenMenuLink",{duration:0.5, x:"-=40", alpha:0, stagger:0.25},"+=0.5");


export function movePage(isOpen){

    console.log("here");
    if (isOpen === false) {
        mainTL.play();
        hiddenMenuTL.play();
        gsap.set("#hidden",{zIndex:100});
        isOpen = true;
    }else{
        mainTL.reverse();
        hiddenMenuTL.reverse();
        gsap.set("#hidden",{zIndex:-1});
        isOpen = false;

    }
}
