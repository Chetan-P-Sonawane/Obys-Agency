
let tl = gsap.timeline();


tl.from(".line h1, .line h2", {
  y: "100%",
  ease: [0.19, 1, 0.22, 1],
  stagger: 0.2,
})
  .to(".line h2", {
    animationName: "animatetext",
    opacity: 1,
  })
  .from(".line1-part1 h4, .line1-part1 h5, .line h2", {
    opacity: 0,
  })
  .to(".line1-part1 h4, .line1-part1 h5", {
    duration: 3.5,
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
  });
