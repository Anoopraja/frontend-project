gsap.from(".nav h3",{
    y: -50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:1
   
})

gsap.from(".main h1", {
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4

})

gsap.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5
})
