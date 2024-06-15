gsap.to(".navigate",{
    backgroundColor:"#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:".navigate",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -15%", 
        scrub:3,
    }
})