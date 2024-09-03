let curs = document.querySelector("#cursor");
let cursBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    curs.style.top = dets.y + "px";
    curs.style.left = dets.x + "px"
    cursBlur.style.top = dets.y + "px";
    cursBlur.style.left = dets.x + "px"
})


gsap.registerPlugin(ScrollTrigger);

gsap.to("#nav", {
  backgroundColor: "black",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%", // Adjust the end point as needed
    scrub: 1 // This creates a smooth transition linked to the scroll position
  }
});

gsap.to("#main", {
  backgroundColor: "black",
  duration: 5,
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -30%",
    end: "top -50%", // Adjust the end point as needed
    scrub: 2 // This creates a smooth transition linked to the scroll position
  }
});


// gsap.to("#main", {
//   backgroundColor: "black",
//   duration: 0.5,
//   scrollTrigger: {
//     trigger: "#main",
//     scroller: "body",
//     start: "top -50%",
//     onEnter: () => {
//       gsap.to("#main", {
//         backgroundColor: "black",
//         duration: 0.5
//       });
//     },
//     onLeaveBack: () => {
//       gsap.to("#main", {
//         backgroundColor: "", // Set to initial background color or remove to use default
//         duration: 0.5
//       });
//     }
//   }
// });
