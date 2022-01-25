import { Slidefromleft, Slidefromright } from "./scrollAnimation.js";
import { burgerTL } from "./burgerAnimation";
import { displayWindowSize } from "./mobileResizing"


var burgerButton = document.querySelector("#burger");

let canISeeMenu = false;

burgerButton.addEventListener("click", () =>{
   if(canISeeMenu === false){
     burgerTL.play();
     canISeeMenu = true;
 }else{
     burgerTL.reverse();
     canISeeMenu = false;
 }
 
});
   









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

window.addEventListener('load', displayWindowSize);