import { gsap } from "gsap";

const burgerBtn = document.querySelector("#burger-container");

gsap.set(".burger-lines",{transformOrigin:"left center"});

// let isMenuOpen = false;
let burgerAnimation = gsap.timeline({paused:true});

burgerAnimation.to(".burger-lines",{duration:0.25, scaleY:2})
.addPause("backToLines")
.addLabel("openMenu")
.to("#top-line",{duration:0.25, rotation:-45,y:"-=2"},"cross")
// .to("#middle-line",{duration:0.25, scale:0, transformOrigin:"center"},"cross")
.to("#bottom-line",{duration:0.25, rotation:45,y:"+=2"},"cross")
.addPause()
.addLabel("closeMenu")
.to("#top-line",{duration:0.25, rotation:0,y:"+=2"},"uncross")
// .to("#middle-line",{duration:0.25, scale:1, transformOrigin:"center"},"uncross")
.to("#bottom-line",{duration:0.25, rotation:0,y:"-=2"},"uncross")

export function burgerActions(){
    burgerBtn.addEventListener("mouseenter",() =>{
        console.log("enter");
        console.log(burgerBtn.classList.contains("selected"));

        //check to see if the class of selected is on the burger container, and if so don't allow the mouse enter animation
        if(!burgerBtn.classList.contains("selected")){
            burgerAnimation.play();
        }
    });
    
    burgerBtn.addEventListener("mouseleave",() =>{
        console.log("leave");
        //check to see if the class of selected is on the burger container, and if so don't allow the mouse enter animation
        if(!burgerBtn.classList.contains("selected")){
            burgerAnimation.reverse("backToLines");
        }
    });

}