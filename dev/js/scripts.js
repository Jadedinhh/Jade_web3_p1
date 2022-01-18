import $ from "jquery";

let $nav = $('nav[data-nav]');
let isVisible = false;

$(".nav-btns").on("click", function(){
    // console.log("click");
    if(isVisible === false){
        $nav.show();
        isVisible = true;
    }
    else{
        $nav.hide();
        isVisible = false;
    }
})

import { Slidefromleft, Slidefromright } from "./scrollAnimation.js"


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

