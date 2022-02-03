import { gsap } from "gsap";
import {movePage} from "./pageResize"

const burgerBtn = document.querySelector("#burger-container");

gsap.set(".burger-lines",{transformOrigin:"left center"});

let isMenuOpen = false;
let burgerAnimation = gsap.timeline({paused:true});

burgerAnimation.to(".burger-lines",{duration:0.25, y:"+=2"})
.addPause("backToLines")
.addLabel("openMenu")
.to("#top-line",{duration:0.25, rotation:45,y:"-=2.5", fill:"#1E555C"},"cross")
.to("#bottom-line",{duration:0.25, rotation: -45,y:"+=2.5", fill:"#1E555C"},"cross")
.addPause()
.addLabel("closeMenu")
.to("#top-line",{duration:0.25, rotation:0,y:"+=2.5"},"uncross")
.to("#bottom-line",{duration:0.25, rotation:0,y:"-=2.5"},"uncross")

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

    burgerBtn.addEventListener("click",(e) =>{
        console.log("click");
        // call the resize function
        movePage(isMenuOpen);
        
        if(isMenuOpen === false){
            // animate the burger into an X
            burgerAnimation.play("openMenu");
            // add a class to the burger container of selected
            burgerBtn.classList.add("selected");
            isMenuOpen = true;
        }else{
            e.preventDefault;
            // animate the burger into an X
            burgerAnimation.play("closeMenu");
            // add a class to the burger container of selected
            burgerBtn.classList.remove("selected");
            isMenuOpen = false;
        }
    });

}