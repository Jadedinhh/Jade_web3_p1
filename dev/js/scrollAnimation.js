import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// gsap.set(".bigquote", {transformOrigin:"right center"});

export function Slidefromleft( triggerElement, animationElement){
    const tl = new gsap.timeline();

    tl.from(animationElement, {
        duration: 1,
        x: 500,
        alpha:0,
        scrollTrigger:{
            trigger: triggerElement,
            scrub: true,
            tonggleActions: "restart none resume none",
            markers: true
        }
    });
}

export function Slidefromright( triggerElement, animationElement){
    const tl = new gsap.timeline();

    tl.from(animationElement, {
        duration: 5,
        x: -500,
        alpha:0,
        scrollTrigger:{
            trigger: triggerElement,
            scrub: true,
            tonggleActions: "restart none resume none",
            markers: true
        }
    });
}






// export function skillsTrigger(originDirection, animationElement, triggerElement){
//     const tl = new gsap.timeline();

//     tl.from(animationElement,{
//         duration:5, 
//         scaleX:0, 
//         transformOrigin: originDirection,
//         scrollTrigger: {
//             trigger: triggerElement,
//             start:"top 5%",
//             end: "bottom 60%",
//             toggleActions: "restart none resume none",
//             markers: true,
//             scrub: 1
//         }
//     });
// }