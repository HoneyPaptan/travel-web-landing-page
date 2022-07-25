TweenMax.from(".image", 2, {
    y:-500,
    ease: Expo.easeInOut
})
TweenMax.to(".image", 2, {
    y:0,
    ease: Expo.easeInOut
})
TweenMax.from(".rectangle", 2, {
    y:-500,
    ease: Expo.easeInOut
})
TweenMax.to(".rectangle", 2, {
    y:0,
    ease: Expo.easeInOut
})
TweenMax.from(".logo", 2, {
    delay:1,
    y:-50,
    ease: Expo.easeInOut
})
TweenMax.to(".logo", 2, {
    delay:1,
    y:0,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".menu ul li", 2, {
    delay: 1,
    y:-50,
    opacity: 0,
    ease: Expo.easeInOut

}, 0.10)
TweenMax.from(".big-text h2", 2, {
    delay: 2,
    y: -20,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.to(".big-text h2", 2, {
    delay: 2,
    y: 0,
    opacity: 1,
    ease: Expo.easeInOut
})
TweenMax.from(".big-text p", 2, {
    delay: 3,
    y: -20,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.to(".big-text p", 2, {
    delay: 3,
    y: 0,
    opacity: 1,
    ease: Expo.easeInOut
})
TweenMax.from(".btn", 2, {
    delay: 4,
    y: -20,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.to(".btn", 2, {
    delay: 4,
    y: 0,
    opacity: 1,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".btn1", 2, {
    delay: 4,
    y: -20,
    opacity: 0,
    ease: Expo.easeInOut

}, 0.30)



