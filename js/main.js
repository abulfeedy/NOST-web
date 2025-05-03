// Countdown Timer
function updateCountdown() {
  const now = new Date();
  const nextDrop = Math.ceil(now.getTime() / (5 * 60 * 1000)) * (5 * 60 * 1000);
  const timeLeft = nextDrop - now;
  const seconds = Math.floor(timeLeft / 1000);
  document.getElementById("countdown").innerText = `${seconds}s`;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Mock Reward Feed
const wallets = [
  "0x5aB...c3F",
  "0x7dE...a9B",
  "0x2fC...e1D",
  "0x9bA...f5G",
  "0x4cD...b2H",
  "0x8eF...d4J",
  "0x3aB...g6K",
  "0x6fC...h8L",
];

function getRandomWallet() {
  return wallets[Math.floor(Math.random() * wallets.length)];
}

function getRandomAmount() {
  return (Math.random() * 0.5 + 0.01).toFixed(4); // Random SOL between 0.1 and 0.6
}

function addReward() {
  const feedList = document.getElementById("feed-list");
  const rewardItem = document.createElement("div");
  rewardItem.classList.add("feed-item");
  rewardItem.innerHTML = `
    <p>Wallet <span class="wallet">${getRandomWallet()}</span> earned</p>
    <p class="amount">${getRandomAmount()} SOL</p>
  `;
  feedList.prepend(rewardItem);

  // Limit to 5 items for performance
  while (feedList.children.length > 5) {
    feedList.removeChild(feedList.lastChild);
  }
}

// Add a new reward every 10 seconds
addReward(); // Initial reward
setInterval(addReward, 10000);

// ... keep the rest of main.js (e.g., copyContractAddress, hamburger menu) ...

// Copy Contract Address
function copyContractAddress() {
  const ca = document.getElementById("contract-address").innerText;
  navigator.clipboard.writeText(ca).then(() => {
    alert("Contract Address copied to clipboard!");
  });
}

// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");
const mobileNavLinks = document.querySelectorAll(".mobile-menu ul");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Close menu with close button
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Close menu when a nav link is clicked
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});
