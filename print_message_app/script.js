// get elements into variable
let inputElement = document.getElementById("input");
let btnElement = document.getElementById("btn");
let msgElement = document.getElementById("msg");


//Events
btnElement.addEventListener('click', ()=>{
    if (inputElement.value!=""){
      msgElement.innerHTML = inputElement.value;
      //empty input value
      inputElement.value = "";
    }
    else{
        msgElement.innerHTML='You have to enter message'
    }

    
})