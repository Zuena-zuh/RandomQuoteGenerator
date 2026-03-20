const quotes = [
  "Believe in yourself 🌟",
  "You are capable of amazing things 💖",
  "Stay positive and keep going 🚀",
  "Progress, not perfection ✨",
  "Dream big, work hard 💪"
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}