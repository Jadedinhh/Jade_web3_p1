import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.set(".burger-lines",{transformOrigin:"center"});

const topTL = new gsap.timeline();
topTL.to(".burger-lines:nth-child(1)",{duration:0.25, y:"+=8"})
.to(".burger-lines:nth-child(1)",{duration:0.25, rotation:45,fill:"#1E555C"});

const bottomTL = new gsap.timeline();
bottomTL.to(".burger-lines:nth-child(3)",{duration:0.25, y:"-=8"})
.to(".burger-lines:nth-child(3)",{duration:0.25, rotation:-45,fill:"#1E555C"});

const middleTL = new gsap.timeline();
middleTL.to(".burger-lines:nth-child(2)",{duration:0.25, scale:0})

export const burgerTL = new gsap.timeline({paused:true});

burgerTL.add(topTL,"burger")
    .add(bottomTL,"burger")
    .add(middleTL,"burger")