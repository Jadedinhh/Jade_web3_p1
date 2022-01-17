import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// gsap.set(".bigquote", {transformOrigin:"right center"});


export function skillsTrigger(originDirection, animationElement, triggerElement){
    const tl = new gsap.timeline();

    tl.from(animationElement,{
        // duration:5, 
        scaleX:0, 
        transformOrigin: originDirection,
        scrollTrigger: {
            trigger: triggerElement,
            start:"top 5%",
            end: "bottom 70%",
            toggleActions: "restart none resume none",
            markers: true,
            scrub: true
        }
    });
}