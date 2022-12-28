changeColor=()=>{
    
    let x= Math.round(Math.random()*256)
    let y= Math.round(Math.random()*256)
    let z=Math.round(Math.random() *256);

    let bgColor = `rgb(${x}, ${y}, ${z})`;
    document.body.style.background=bgColor
}

//The Math.round() function returns the value of a number rounded to the nearest integer.

