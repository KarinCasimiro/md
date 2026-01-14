console.clear();

const masterTl = gsap.timeline({
  paused: true,
});
const cannon = document.querySelector(".cannon");
const angle = 20;
const tl1 = gsap
  .timeline()
  .to(cannon, {
    rotation: -angle,
    duration: 0.65,
    ease: "power1.inOut"
  })
  .to(
    cannon,
    {
      rotation: angle,
      ease: "power1.inOut",
      duration: 1,
      repeat: 3,
      yoyo: true
    }
  )
.to(cannon, {
    rotation: 0,
    duration: 0.65,
    ease: "power1.inOut"
  });

const bullets = [];
const bulletsContainer = document.querySelector(".flair-container");
const tl1Time = tl1.duration();

for (i = 0; i < 40; i++) {
  const className = "flair--" + gsap.utils.random(2, 35, 1);
  flairBullet = document.createElement("div");
  flairBullet.setAttribute("class", "flair flair-bullet " + className);
  bulletsContainer.appendChild(flairBullet);
  bullets.push(flairBullet);
  gsap.set(flairBullet, { scale: "random(0.4, 0.6)" });
}

const tl2 = gsap
  .timeline()
  .to(bullets, {
    opacity: 1,
    duration: 0.25,
    stagger: {
      amount: tl1Time
    }
  })
  .to(
    bullets,
    {
      duration: tl1Time,
      physics2D: {
        velocity: "random(600, 850)",
        angle: () => 270 + gsap.getProperty(cannon, "rotation"),
        gravity: 600
      },
      stagger: {
        amount: tl1Time
      }
    },
    0
  );
masterTl
  .add(tl1, 0)
  .add(tl2, 0)
  .play();
window.addEventListener("click", () => masterTl.restart());
