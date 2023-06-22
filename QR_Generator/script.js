let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    // setTimeout(()=>{
    //     qrText.classList.remove("error")
    //     console.log('heelo');

    // },1000)
    setTimeout(() => {
      qrText.classList.remove("error");
      console.log("hello");
    }, 1000);
  }
}
