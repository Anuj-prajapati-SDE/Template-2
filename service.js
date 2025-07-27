  window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.add("same-time-pin");

    // 1. Service Pin Area
    tl.to(".service-back-container", {
      width: "100%",
      duration: 2,
      height: "100%",
      borderRadius: 0,
      scrollTrigger: {
        trigger: ".Service-section",
        scroller: "body",
        start: "top top", 
        scrub: 3,
        end: "300%",
        pin: true,
        markers: true
      },
    })
      .to(".service-front-container .circle1", {
        duration: 0.5,
        border: "1.5px solid white",
        scrollTrigger: {
          trigger: ".Service-section",
          start: "top 7%",
          scrub: 2,
          end: "bottom",
          scroller: "body",
        },
      }, "same-time-pin")
      .to(".service-front-container .circle2", {
        duration: 0.5,
        rotate: "90deg",
        border: "2px dashed white",
        scrollTrigger: {
          trigger: ".Service-section",
          scroller: "body",
          start: "top 7%",
          scrub: 3,
          end: "bottom",
        },
      }, "same-time-pin")
      .to(".service-front-container .circle1 .circle2 .circle3", {
        duration: 0.5,
        transform: "rotate(90deg)",
        border: "1px dashed white",
        scrollTrigger: {
          trigger: ".Service-section",
          scroller: "body",
          start: "top 7%",
          scrub: 3,
          end: "bottom",
        },
      }, "same-time-pin")
      .to(".service-front-container", {
        duration: 4,
        delay: 2,
        opacity: 0.9,
        backgroundColor: "#161324",
        scrollTrigger: {
          trigger: ".Service-section",
          scroller: "body",
          start: "top 7%",
          scrub: 3,
          end: "bottom",
        },
      }, "same-time-pin")

    // 2. Circle Transformations
    .to(".service-front-container .circle1 .circle2 .circle3 .circle4", {
      duration: 0.3,
      width: "90%",
      height: "90%",
      border: "1px solid white",
      scrollTrigger: {
        trigger: ".service-front-container",
        scroller: "body",
        start: "100% top",
        end: "180%",
        scrub: 2,
      },
    }, "same-time-pin")
      .to(".circle5", {
        duration: 0.5,
        width: "90%",
        height: "90%",
        border: "1px solid white",
        transform: "rotate(90deg)",
        scrollTrigger: {
          trigger: ".service-front-container",
          scroller: "body",
          start: "100% top",
          end: "180%",
          scrub: 2,
        },
      }, "same-time-pin")
      .to(".circle6", {
        duration: 0.5,
        width: "90%",
        height: "90%",
        borderRadius: "50%",
        border: "1px solid white",
        scrollTrigger: {
          trigger: ".service-front-container",
          scroller: "body",
          start: "100% top",
          end: "180%",
          scrub: 2,
        },
      }, "same-time-pin")
      .to(".circle1", {
        width: "40%",
        height: "85%",
        scrollTrigger: {
          trigger: ".service-front-container",
          scroller: "body",
          start: "100% top",
          end: "180%",
          scrub: 2,
        },
      }, "same-time-pin")
      .to(".circle1 .circle2", {
        width: "90%",
        height: "90%",
        scrollTrigger: {
          trigger: ".service-front-container",
          scroller: "body",
          start: "100% top",
          end: "180%",
          scrub: 2,
        },
      }, "same-time-pin")
      .to(".circle3", {
        width: "90%",
        height: "90%",
        scrollTrigger: {
          trigger: ".service-front-container",
          scroller: "body",
          start: "100% top",
          end: "180%",
          scrub: 2,
        },
      }, "same-time-pin")

    // 3. Service Box Text Animations
 .to(".Service-box-container p", {
      fontSize: "60px",
      fontWeight: "500",
      color: "white",
      transform: "translateZ(120px)perspective(400px)",
      scrollTrigger: {
        trigger: ".service-front-container",
        scroller: "body",
        start: "190% top",
        end: "210%",
        scrub: 2,
      },
    }, "same-time-pin")
      .to(".Service-box-container p", {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".service-front-container",
          scroller: "body",
          start: "215% top",
          end: "230%",
          scrub: 2,
        },
      }, "same-time-pin")
      .to(".Service-box-container h1", {
        fontSize: "50px",
        fontWeight: "500",
        color: "white",
        transform: "translateZ(120px)perspective(400px)",
        scrollTrigger: {
          trigger: ".service-front-container",
          scroller: "body",
          start: "270% top",
          end: "300%",
          scrub: 2,
        },
      })

    // 4. CSS Variables Animation for Dots
    .to("html", {
      "--dots-color": "white",
      "--dots-width": "15px",
      "--dots-height": "15px",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".circle-container",
        scroller: "body",
        start: "180% top",
        end: "220%",
        scrub: 2,
      },
    })

    // 5. Dots Rotation Animation
    .add("same-time-dots-rotate")
      .to(".circle1", {
        transform: "rotate(140deg)",
        duration: 2,
        scrollTrigger: {
          trigger: ".Service-box-container",
          start: "240% top",
          end: "300%",
          scrub: 3,
          scroller: "body",
        },
      }, "same-time-dots-rotate")
      .to(".circle2", {
        transform: "rotate(170deg)",
        duration: 2.5,
        scrollTrigger: {
          trigger: ".Service-box-container",
          start: "240% top",
          end: "300%",
          scrub: 5,
          scroller: "body",
        },
      }, "same-time-dots-rotate")
      .to(".circle3", {
        transform: "rotate(140deg)",
        duration: 3,
        scrollTrigger: {
          trigger: ".Service-box-container",
          start: "240% top",
          end: "300%",
          scrub: 5,
          scroller: "body",
        },
      }, "same-time-dots-rotate")
      .to(".circle4", {
        transform: "rotate(60deg)",
        duration: 3,
        scrollTrigger: {
          trigger: ".Service-box-container",
          start: "240% top",
          end: "300%",
          scrub: 5,
          scroller: "body",
        },
      }, "same-time-dots-rotate")
      .to(".circle5", {
        transform: "rotate(160deg)",
        duration: 3,
        scrollTrigger: {
          trigger: ".Service-box-container",
          start: "240% top",
          end: "300%",
          scrub: 5,
          scroller: "body",
        },
      }, "same-time-dots-rotate")
      .to(".circle6", {
        transform: "rotate(70deg)",
        duration: 3,
        scrollTrigger: {
          trigger: ".Service-box-container",
          start: "240% top",
          end: "300%",
          scrub: 5,
          scroller: "body",
        },
      }, "same-time-dots-rotate");

    // 6. Service Boxes Fly In
    const boxIds = [
      { id: 1, x: -360, y: -230 },
      { id: 2, x: 340, y: -230 },
      { id: 3, x: 400, y: 10 },
      { id: 4, x: 270, y: 250 },
      { id: 5, x: -270, y: 200 },
      { id: 6, x: -350, y: 0 },
    ];
    boxIds.forEach((box, i) => {
      tl.to(`#Service-box-${box.id}`, {
        width: "300px",
        height: "150px",
        x: box.x,
        y: box.y,
        duration: 1,
        scrollTrigger: {
          trigger: ".Service-box-container",
          start: `${230 + i * 10}%`,
          end: `${240 + i * 10}%`,
          scrub: 3,
          scroller: "body",
        },
      });
    });
  });
