const quotes = [
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
];

const colors = [
  '#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF',
  '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF',
  '#FFFFFC'
];

const fonts = [
  "'Georgia', serif",
  "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
  "'Trebuchet MS', Helvetica, sans-serif",
  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
  "'Lucida Bright', Georgia, serif",
  "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
];

// Grab references to HTML elements
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const button = document.getElementById('new-quote');

// Function to pick a random quote and update the page
function newQuote() {
  // Pick random quote
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // Update quote text and author
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `- ${quote.author}`;

  // Pick random color for background
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;

  // Pick random font and apply to quote and author
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  quoteText.style.fontFamily = randomFont;
  quoteAuthor.style.fontFamily = randomFont;
}
// Event listener for the button click
button.addEventListener('click', newQuote);