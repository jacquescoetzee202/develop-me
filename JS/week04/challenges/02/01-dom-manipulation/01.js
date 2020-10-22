((d) => {

    let square = d.getElementById("border");
    
    square.style.border = "10px solid red";
    
    let borderColorRed = true;

    square.addEventListener('click',() => {
        borderColorRed = !borderColorRed;

        if (borderColorRed){
            square.style.border = "10px solid red";
        } else {
            square.style.border = "10px solid blue";
        }
    })
    square.style.border = `10px solid ${borderColor}`;

})(document);

  
  
  
  
  