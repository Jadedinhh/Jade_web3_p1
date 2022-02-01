import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#glance", "#attractions", "#cuisine","hero", "#quote", "#human", "#tips" ];

export function scrollPage(index){
    gsap. to (window, {duration: 3, scrollTo:idArray[index]});
}