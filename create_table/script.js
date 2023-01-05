let columnsInput = document.getElementById("columns");
let rowsInput = document.getElementById("rows");
let btn = document.querySelector("#btn");

btn.addEventListener("click", createTable);

function createTable() {
  let body = document.body;
  let table = document.createElement("table");
  
  for (var i = 0; i < +rowsInput.value; i++) {
    let tr = document.createElement("tr"); // <tr></tr>
    table.appendChild(tr);

    for (var j = 0; j < +columnsInput.value; j++) {
      let td = document.createElement("td"); // <td></td>
    //   let txt = document.createTextNode("item txt");
    //   td.appendChild(txt);
    td.innerHTML="inner text"
      tr.appendChild(td);
    }
 
  }

  body.appendChild(table);
     rowsInput.value = "";
     columnsInput.value = "";
  
}

