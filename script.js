Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


  gsap.from ("nav h1 ,  nav h5 , #techstack h6 , .move img" ,{
    // scale :0,
    y:-20 ,
    opacity:0,
    duration:1,
    delay :0.5 ,
    stagger : 1

  })
  gsap.from ("#page1 h1 , #page1 p" ,{
    // scale :0,
    y:-20 ,
    opacity:0,
    duration:1,
    delay :0.9 ,
    stagger : 1

  })




  gsap.from ("#techstack h6" ,{
    scale :0,
    opacity:0,

  })
  gsap.to("#techstack h6", {
    y:10,
    repeat:-1,
    duration:1,
    yoyo:true ,
  })