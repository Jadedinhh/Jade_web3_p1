import { Slidefromleft, Slidefromright } from "./scrollAnimation.js";
import { burgerTL } from "./burgerAnimation";
import { displayWindowSize } from "./mobileResizing"
import { menuAnimator } from "./mobileMenu"
import {scrollPage } from "./pageScroll"

var burgerButton = document.querySelector("#burger");

let canISeeMenu = false;

   
function openCloseMenu(){
   if(canISeeMenu === false){
     burgerTL.play();
     menuAnimator.play();
     canISeeMenu = true;
 }else{
     burgerTL.reverse();
     menuAnimator.play();
     canISeeMenu = false;
   } 
}


burgerButton.addEventListener("click", openCloseMenu);

let navButtons = document.querySelectorAll(".nav-btns");

for(const button of navButtons){
    button,addEventListener("click", checkScrolling);
}
// for ( let i = 0; i < navButtons.length; i++){
//     navButtons[i].addEventListener("click", openCloseMenu);
// }

function checkScrolling(e) {
    const indexValue = [].indexOf.call(navButtons, e.target)
    if (indexValue != -1){
        scrollPage(indexValue);
    }
}



window.addEventListener('load', function(){


    let triggerElement = [ "#quote", "#gallery", "#quote", "#gallery"];

    let animationElement = [ "#quote h1", "#h1", "#quote h2", "#h5" ];

    // let buttonIndex = 0

    for (let i = 0; i < triggerElement.length; i++){

        if (i === triggerElement.length/2){
            Slidefromleft (triggerElement[i], animationElement[i]);}
            else{
                Slidefromright(triggerElement[i], animationElement[i]);
            }
        }
//    skillsTrigger("right center", ".bigquote","#quote"); 

//    skillsTrigger("left center",".gallery-image","#human");

    });

window.addEventListener("resize", displayWindowSize);

window.addEventListener('load', displayWindowSize);