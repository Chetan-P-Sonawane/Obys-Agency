
// Removed Locomotive scroll because it was amking an issue with the
// gooey effect section laggy due to the method it uses to make smoothscroll
// So, added lenis instead of Locomotive

function LenisScroll(){
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        // Keep ScrollTrigger in sync
        lenis.on("scroll", ScrollTrigger.update);

        // RAF loop for Lenis
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
}

let tl = gsap.timeline();

function Loader(){

tl.from(".line h1, .line h2", {
  y: "100%",
  stagger: "0.35",
  ease: [0.76, 0, 0.24, 1],
})
  .to(".line h2", {
    animationName: "animatetext",
    opacity: 1,
  })
  .from(".line1-part1 h4, .line1-part1 h5", {
    opacity: 0,
  })
  .to(".line1-part1 h4, .line1-part1 h5", {
    // duration: 3.5,
    duration: 1,
    onstart: () => {
      let counter = 0;
      let countertext = document.querySelector(".line1-part1 h4");
      let counterinterval = setInterval(() => {
        if (counter < 100) {
          counter++;
          countertext.innerHTML = counter;
        }
      }, 30);
      setTimeout(() => {
        clearInterval(counterinterval);
      }, 3100);
    },
  })
  .to(".line1-part1 h4, .line1-part1 h5, .line h1, .line h2, .line h2", {
    opacity: 0,
    stagger: 0.1,
    animationName: "",
  })
  .to("#loader", {
    y: -1200,
    duration: 1,
    ease: [0.19, 1, 0.22, 1],
  })
  .from(
    "#hero1 h1, #hero2 h1, #hero3 h1, #hero4 h1",
    {
      y: 150,
      stagger: 0.1,
      // ease: [0.19, 1, 0.22, 1],
    },
    "-=1"
  )

}


function cursorAnimation() {
  Shery.mouseFollower("cursor", {
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet(".nav-part-2 h5, .menu-opener__square", {
    // scale: 1,
    // duration: 0.3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });



  // All Projects Btn
  const projectbtn = document.querySelector(".project-btn .all-projects-btn");

  projectbtn.addEventListener("mouseenter", ()=>{
    gsap.to(".all-projects-btn", {
      scale: 0.9,
      ease: [0.76, 0, 0.24, 1],
      duration: 0.3
    });
  })

  projectbtn.addEventListener("mouseleave", () => {
    gsap.to(".all-projects-btn", {
      scale: 1,
      ease: [0.76, 0, 0.24, 1],
      duration: 0.3
    });
  });

}


function videofun(){
    let vidwrapper = document.querySelector(".page2 .vid-wrapper");
    let vidbtn = document.querySelector(".page2 .video-button");

    let video = document.querySelector(".page2 video");
    let vidimg = document.querySelector(".page2 .video-img");

      let vidcontainer = document.querySelector(".page2 .video-container");

      vidcontainer.addEventListener("mousemove", function(e){
        let rect = vidcontainer.getBoundingClientRect();
          let btnRect = vidbtn.getBoundingClientRect(); // get follower size

        gsap.to(vidbtn, {
          x: e.clientX - rect.left- btnRect.x - btnRect.width/2,
          y: e.clientY - rect.top - btnRect.y - btnRect.height/2,
        });
        // console.log("/2",e.clientX - rect.left - rect.width / 2);
        // console.log("/1.39",e.clientX - rect.left - rect.width / 1.39);
      })


    // vidimg.addEventListener("mousemove", function (e) {
    //   let btnRect = vidbtn.getBoundingClientRect(); // get follower size
    //   let containerRect = vidimg.getBoundingClientRect(); // get container position

    //   gsap.to(vidbtn, {
    //     x: e.clientX  - btnRect.x,
    //     y: e.clientY - btnRect.y,
    //   });

    // });


      vidcontainer.addEventListener("mouseleave", function () {
        gsap.to(vidbtn, {
          x: 0,
          y: 0,
        });
      });

    vidcontainer.addEventListener("click", function () {
      console.log("clicked");
      if (video.paused) {
        video.play();
        vidimg.style.opacity = 0;
        vidbtn.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        gsap.to(vidbtn, {
          scale: 0.55,
        });
        // vidbtn.style.scale = 1;
      } else {
        video.pause();
        vidimg.style.opacity = 1;
        vidbtn.innerHTML = `<i class="ri-play-mini-fill"></i>`;
        // vidbtn.style.scale = 0.5;
        gsap.to(vidbtn, {
          scale: 1,
        });
      }
    });

}


function titlereveal(){
  // gsap.from(".page-title h5", {
  //   opacity: 0,
  //   // delay:1,
  //   duration: 2,
  //   ease: "expo.out",
  //   scrollTrigger: {
  //     trigger: ".page-title",
  //     start: "top 90%",
  //     toggleActions: "play reverse play reverse",
  //     markers: true
  //   },
  // });

  // gsap.from(".heading h3", {
  //   y: 150,
  //   duration: 1.6,
  //   ease: "expo.out",
  //   scrollTrigger: {
  //     trigger: ".page-title .title-wrap",
  //     start: "top 90%",
  //     toggleActions: "play reverse play reverse",
  //     markers: true,
  //   },
  // });

  // gsap.from(".underline", {
  //   x: "200%",
  //   duration: 2,
  //   ease: "expo.out",
  //   scrollTrigger: {
  //     trigger: ".page-title .underline",
  //     start: "top 100%",
  //     toggleActions: "play reverse play reverse",
  //   },
  // });

  // Title text animation
  gsap.utils.toArray(".page-title h5").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      duration: 2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: el.closest(".page-title"),
        start: "top 90%",
        toggleActions: "play reverse play reverse"
      },
    });
  });

  // Heading animation
  gsap.utils.toArray(".heading h3").forEach((el) => {
    gsap.from(el, {
      y: 150,
      duration: 1.6,
      ease: "expo.out",
      scrollTrigger: {
        trigger: el.closest(".page-title").querySelector(".title-wrap"),
        start: "top 90%",
        toggleActions: "play reverse play reverse"
      },
    });
  });

  // Underline animation
  gsap.utils.toArray(".underline").forEach((el) => {
    gsap.from(el, {
      x: "200%",
      duration: 2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: el,
        start: "top 100%",
        toggleActions: "play reverse play reverse"
      },
    });
  });
}

function imganimation(){
  Shery.imageEffect(".image-div-1, .image-div-2, .image-div-3, .image-div-4", {
    style: 6, //Select Style
    // debug: true, /// Debug Panel
    gooey: true,
    config: {
      noiseDetail: { value: 7.44, range: [0, 100] },
      distortionAmount: { value: 2.98, range: [0, 10] },
      scale: { value: 36.36, range: [0, 100] },
      speed: { value: 0.79, range: [0, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7930966609153571 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.84, range: [0, 10] },
      metaball: { value: 0.55, range: [0, 2] },
      discard_threshold: { value: 0.54, range: [0, 1] },
      antialias_threshold: { value: 0.01, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 6.87, range: [0, 100] },
    },
  });
}

Loader();
LenisScroll();
cursorAnimation();
videofun();
titlereveal();
// imganimation();