const hole = document.querySelector(".hole")
const owl = document.querySelector(".owl")
const shadow = document.querySelector(".shadow")
const frontWing = document.querySelector('#front-wing')
const backWing = document.querySelector('#back-wing')

const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 0.5 })

tl.from(hole, { scale: 0, repeat: 1, yoyo: true })
    .fromTo(owl, { y: 185, scaleY: 1.5 }, { y: -175, scaleY: 1 }, 0.2)
    .to(owl, { y: -4, ease: "power1.in" }, ">0.4")
    .to(owl, { scaleY: 0.9, scaleX: 1.3, duration: 0.2, transformOrigin: "50% 100%", repeat: 1, yoyo: true })
    .to(shadow, { opacity: 1, duration: 0.2 }, 0.7)
    .to(shadow, { scaleX: 0.6, ease: "power1.in" }, ">")


GSDevTools.create({})
