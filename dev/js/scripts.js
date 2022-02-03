import { Slidefromleft, Slidefromright } from "./scrollAnimation.js";
import { burgerTL } from "./burgerAnimation";
import { displayWindowSize } from "./mobileResizing"
import { menuAnimator } from "./mobileMenu"
import {scrollPage } from "./pageScroll"

var burgerButton = document.querySelector("#burger");

let burgerClicked = false;

   
function openCloseMenu(){
   if(burgerClicked === false){
     burgerTL.play();
     menuAnimator.play();
     burgerClicked = true;
 }else{
     burgerTL.reverse();
     menuAnimator.reverse();
     burgerClicked = false;
   } 
}


burgerButton.addEventListener("click", openCloseMenu);

let navButtons = document.querySelectorAll(".nav-btns");

for(const button of navButtons){
    button.addEventListener("click", checkScrolling);
    button.addEventListener("click", openCloseMenu);
}


function checkScrolling(e) {
    const indexValue = [].indexOf.call(navButtons, e.target)
    
    if (indexValue != -1){
        scrollPage(indexValue -1);
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


    });


 window.addEventListener("resize", function(){
        if(burgerClicked === true){
            console.log("fire");
            openCloseMenu();
        }
    });

    
window.addEventListener("resize", displayWindowSize);

window.addEventListener('load', displayWindowSize);