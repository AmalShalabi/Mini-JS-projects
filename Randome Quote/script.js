let quote = document.getElementById("qoute");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

getQuote = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      quote.innerText = data.content;
      author.innerText = data.author;
    })
    .catch((err) => console.log(err));
};

btn.addEventListener("click", getQuote);
