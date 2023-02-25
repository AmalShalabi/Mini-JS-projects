const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-minllionaires");
const sortBtn = document.getElementById("sort");
const calculateBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();
//Fetch random user and add money
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  addData(newUser);
}

//Add new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM();
}

//update Dom
function updateDOM(providedData = data) {
  //clear main div
  main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;
  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

//Format numer as money
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"); // 12,345.67
}

//Double Money
function doubleMoney() {
  data = data.map((person) => {
    return { ...person, money: person.money * 2 };
  });
  updateDOM();
}

//Event listner
addUserBtn.addEventListener("click", () => {getRandomUser()});
doubleBtn.addEventListener("click", doubleMoney);
