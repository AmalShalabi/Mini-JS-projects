const api = "https://rickandmortyapi.com/api/character";

const getData = async () => {
  try {
    const response = await fetch(api);
    const data = await response.json();
    printData(data);
  } catch (error) {
    console.log("Error:",error.message);
  }
};

const printData = (data) => {
  const header = document.querySelector("#header");
  const content = document.querySelector("#content");

  header.innerHTML += `<select class="form-control" onchange="getCh(this.value)">
  <option>select character</option>
  ${data.results.map((character) => `<option>${character.name}</option>`)}
  </select>`;

  console.log(header);
};

const getCh = async (name) => {
  if (name != "select character") {
    const response = await fetch(`${api}?name=${name}`);
    const data = await response.json();

    content.innerHTML = `
    <h2> ${data.results[0].name} (${data.results[0].status})</h2>
     <h4><b>Gender:</b> ${data.results[0].gender} </h4>
     <img src= "${data.results[0].image}" width="250px"/>
    `;
  }
};
getData();
