let detials = document.querySelector(".details");
let imgContainer = document.querySelector(".img-container");
let btn = document.getElementById("btn");
let url = "https://random-data-api.com/api/v2/users?response_type=json";

let getUser = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.first_name);
      console.log(data.last_name);
      console.log(data.avatar);
      console.log(data.employment.title);
      console.log(data.address.city);

      imgContainer.innerHTML=`<img src=${data.avatar}/>`
      detials.innerHTML = `<h2>${data.first_name} ${data.last_name}</h2>
      <h3>${data.employment.title}</h3>
      <h4><i class="fa-solid fa-location-dot"></i> ${data.address.city}</h4>`;
    });
};

btn.addEventListener('click',getUser)
