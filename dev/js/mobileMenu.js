import { gsap } from "gsap";

export const menuAnimator = new gsap.timeline({paused:true});
menuAnimator.to("#nav-container", {duration:0.5, y:0});
