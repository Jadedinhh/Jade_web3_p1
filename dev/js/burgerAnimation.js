import { gsap } from "gsap";
import {movePage} from "./pageResize";


const burgerBtn = document.querySelector("#burger-container");

gsap.set(".burger-lines",{transformOrigin:"left center"});

let isMenuOpen = false;
let burgerAnimation = gsap.timeline({paused:true});

burgerAnimation.to("#top-line", {duration:0.1, y:"-=2"})
.to("#bottom-line", {duration:0.1, y:"+=2"})
.addPause("backToLines")
.addLabel("openMenu")
.to("#top-line",{duration:0.25, rotation:45,y:"-=2.5"},"cross")
.to("#bottom-line",{duration:0.25, rotation: -45,y:"+=2.5"},"cross")
.addPause()
.addLabel("closeMenu")
.to("#top-line",{duration:0.25, rotation:0,y:"+=2.5"},"uncross")
.to("#bottom-line",{duration:0.25, rotation:0,y:"-=2.5"},"uncross")

export function burgerActions(){
    burgerBtn.addEventListener("mouseenter",() =>{
        console.log("enter");
        console.log(burgerBtn.classList.contains("selected"));
        if(!burgerBtn.classList.contains("selected")){
            burgerAnimation.play();
        }
    });
    
    burgerBtn.addEventListener("mouseleave",() =>{
        console.log("leave");
        if(!burgerBtn.classList.contains("selected")){
            burgerAnimation.reverse("backToLines");
        }
    });

    burgerBtn.addEventListener("click",(e) =>{
        console.log("click");
  
        movePage(isMenuOpen);
        
        if(isMenuOpen === false){
    
            burgerAnimation.play("openMenu");
            burgerBtn.classList.add("selected");
            isMenuOpen = true;

        }else{
            e.preventDefault;
 
            burgerAnimation.play("closeMenu");
 
            burgerBtn.classList.remove("selected");
            isMenuOpen = false;
        }
    });

}