const jockContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
"https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
let getJoke = () => {
    jockContainer.classList.remove('fade')
  fetch(url)
  .then(data => data.json())
  .then(item=>{jockContainer.textContent=`${item.joke}`;
  jockContainer.classList.add('fade')
}).catch(err=>console.log(err));
};
btn.addEventListener('click', getJoke)