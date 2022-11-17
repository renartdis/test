import barba from '@barba/core';
import {gsap} from 'gsap';



const tl = gsap.timeline();

function pageAnimIn(container){
    return tl.to(container.querySelectorAll('.hover-reveal'), {
        // scale: 2,
        duration: 1,
        x: 0,
        y: -200,
        width:'100vw', 
        height:'100vh',
        //ease: "elastic"
        ease: "ease"
    })
}



function pageAnimOut(container) {
    return tl.from(container.querySelectorAll('.hover-reveal'), {
        // scale: 6,
        duration: 1,
        ease: "elastic"
        // ease: "ease"
    })
    .call(animContent, [container])
}

function animContent(container){
    let $img = container.querySelector('.w')

    return tl.fromTo($img, {
        y: 0,
        duration: 2,
        ease: "elastic"
    }, {
        y: 800,
        duration: 2,
        ease: "elastic"
    })
}

barba.init({
  transitions: [
    {
      name: "base",
      async leave(data) {
        await pageAnimIn(data.current.container)
        data.current.container.remove()
      },
      async enter(data) {
        await pageAnimOut(data.next.container)
      }
    }
  ]
});