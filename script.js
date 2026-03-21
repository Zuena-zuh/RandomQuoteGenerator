const quotes = [
  "Believe in yourself 🌟",
  "You are capable of amazing things 💖",
  "Stay positive and keep going 🚀",
  "Progress, not perfection ✨",
  "Dream big, work hard 💪",
  "Soft heart, strong mind 🌸",
  "You got this, always 💕"
];

function generateQuote() {
  const quoteText = document.getElementById("quote");

  quoteText.style.opacity = 0;

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerText = quotes[randomIndex];
    quoteText.style.opacity = 1;
  }, 200);
}