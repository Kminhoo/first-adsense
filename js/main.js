const dateEl = document.querySelector("footer .date");

dateEl.textContent = new Date().getFullYear();



function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    {
      delay: random(0, delay),
      y: size, 
      repeat: -1, 
      yoyo: true, 
      ease: Power1.easeInOut 
    }
  )
}
floatingObject('.one', 1, 15)
floatingObject('.two', .5, 15)
floatingObject('.three', 1.5, 20)