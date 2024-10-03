const quoteBtn = document.getElementById("quote-btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiUrl = "https://quotes-api-self.vercel.app/quote";

async function getQuotes(url) {
  const response = await fetch(url);
  const data = await response.json();
  quote.innerHTML = data.quote;
  author.innerHTML = data.author;
}

getQuotes(apiUrl);

quoteBtn.addEventListener("click", () => {
  getQuotes(apiUrl);
});
