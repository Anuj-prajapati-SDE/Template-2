gsap.registerPlugin(ScrollTrigger);
gsap.from(".hero-upper-content h1", {
  duration: 1,
  y: 150,
  opacity: 0,
  stagger: 0.2
})
gsap.from(".text-container-1 p", {
  duration: 1,
 paddingTop:"60px",
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".text-section",     
    start: "top 90%",
    end: "500px center",
    // scroller: ".container",
    scrub: 3,     
    // markers: true,      
  }
})
 
// const tl = gsap.timeline({
// scrollTrigger: {
//   trigger: " .frame-animation-section",     
//   start: "0% 10%",
//   end: "bottom 25%",
//   // scrub: 3,     
//   pin:true,  // This line is commented out
//   markers: true,      
//   }
// });


// tl.to("#frame1", {
//   top: "-25%",
//   zIndex: 1
// })
// .to("#frame1", {
//    scale : 0.9,
   
// })
// .to("#frame2", {
//   top: "-125%",
//   zIndex: 2
// })
// .to("#frame2 ", {
//    scale : 0.9,
// })
// .to("#frame3", {
//   top: "-225%",
//   zIndex: 3
// })
const tl1 = gsap.timeline({
scrollTrigger: {
    trigger: " .card-animation-section",     
    start: "1% start",
    end: "bottom 15%",
    pin:true,
    scrub: 3,     
    // markers: true,      
  }
});
const tl2 = gsap.timeline({
scrollTrigger: {
    trigger: ".image-cards-animation-section",     
    start: "1% start",
    end: "bottom 15%",
    pin:true,
    scrub: 3,     
    // markers: true,      
  }
});

tl1.from(".card-container #card1", {
   x:"450%",
   rotate :"35deg",
   ease: "power3.out",

})
.from(".card-container #card2", {
   x:"450%",
   rotate :"55deg",
   ease: "power3.out", 
})
.from(".card-container #card3", {
   x:"450%",
   rotate :"75deg",
   ease: "power3.out",
   
})
.from(".card-container #card4", {
   x:"450%",
   rotate :"75deg",
   ease: "power3.out",
   
})
.to(".text-animation-container", {
  top: "-100%"
})
.from(".text-animation-item p", {
 paddingTop: "50px",
  opacity: 0,
  stagger: 0.2
});

tl2.to(".image-cards-container", {
 x:"-50%",

})


const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".frame-animation-section",
    start: "top top",
    scurb:2,
    end: "bottom 25%",
    markers: true,
    pin:true, 
  }
})
tl3.to("#frame1 img", {
  top: "0%",
  zIndex: 1
})
.to("#frame1 img", {
  scale: 0.9,
})
.to("#frame2 img", {
  top: "0%",
  zIndex: 2
})
to("#frame2 img", {
  scale: 0.9,
})
.to("#frame3 img", {
  top: "0%",
  zIndex: 3
})
.to("#frame3 img", {
  scale: 0.9,
})