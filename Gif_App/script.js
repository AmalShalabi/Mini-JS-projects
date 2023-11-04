let submitBtn = document.getElementById("submit-btn");

let generateGif = () => {
  let loader = document.querySelector(".loader");
  loader.style.display = "block";
  document.querySelector(".wrapper").style.display = "none";

  let q = document.getElementById("search-box").value;
  let gifCount = 12;
  let finalURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=${gifCount}&offset=0&rating=g&lang=en`;
  document.querySelector(".wrapper").innerHTML = "";

  fetch(finalURL)
    .then((res) => res.json())
    .then((info) => {
      console.log(info.data);

      let gifData = info.data;
      gifData.forEach((gif) => {
        let container = document.createElement("div");
        container.classList.add("container");
        let iframe = document.createElement("img");
        console.log(gif);
        iframe.setAttribute("src", gif.images.downsized_medium.url);
        iframe.onload = () => {
          gifCount--;
          if (gifCount == 0) loader.style.display = "none";
          document.querySelector(".wrapper").style.display = "grid";
        };
        container.append(iframe);
        let copyBtn = document.createElement("button");
        copyBtn.innerText='Copy Link';
        copyBtn.onclick = () => {
          //Append the obtained ID to default URL
          let copyLink = `https://media4.giphy.com/media/${gif.id}/giphy.mp4`;
          //Copy text inside the text field
          navigator.clipboard
            .writeText(copyLink)
            .then(() => {
              alert("GIF copied to clipboard");
            })
            .catch(() => {
              //if navigator is not supported
              alert("GIF copied to clipboard");
              //create temporary input
              let hiddenInput = document.createElement("input");
              hiddenInput.setAttribute("type", "text");
              document.body.appendChild(hiddenInput);
              hiddenInput.value = copyLink;
              //Select input
              hiddenInput.select();
              //Copy the value
              document.execCommand("copy");
              //remove the input
              document.body.removeChild(hiddenInput);
            });
        };
        container.append(copyBtn);
        document.querySelector(".wrapper").append(container);
      });
    });
};

submitBtn.addEventListener("click", generateGif);
window.addEventListener("load", generateGif);

//15
