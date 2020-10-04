 const intro = document.querySelector('.intro');
 const video = intro.querySelector('video');
 const text = intro.querySelector('h1');
//  
const section = document.querySelector('.post-intro');
const end = section.querySelector('h1');

// Scroll Magic
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElemnt: intro,
    triggerHook:0
})
.addIndicators()
.setPin(intro)
.addTo(controller); 

// Text

const textAni = TweenMax.fromTo(text,3,{opacity:1},{opacity:0})
let sceneTwo = new ScrollMagic.Scene({
    duration:3000,
    triggerElemnt:intro,
    triggerHook:0
})
.setTween(textAni)
.addTo(controller);

// Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update',e =>{
    scrollpos = e.scrollPos / 1000;
});

setInterval(()=>{
    delay += (scrollpos-delay)*accelamount;
    video.currentTime = delay;
},33.3)