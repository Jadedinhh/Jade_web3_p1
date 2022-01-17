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

import { skillsTrigger } from "./scrollAnimation.js"
window.addEventListener('load', function(){
   skillsTrigger("right center", ".bigquote","#quote"); 

   skillsTrigger("left center",".gallery-image","#human");
})
