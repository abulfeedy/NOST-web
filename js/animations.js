// Coin Drop Animation
function createCoinDrop() {
  const coin = document.createElement("div");
  coin.classList.add("coin");
  coin.style.left = `${Math.random() * 100}%`;
  document.querySelector(".hero").appendChild(coin);

  gsap.to(coin, {
    y: 200,
    opacity: 0,
    duration: 2,
    ease: "power1.out",
    onComplete: () => coin.remove(),
  });
}
setInterval(createCoinDrop, 2000);
