let button = document.getElementById("myButton");
let isBlack = false;

button.addEventListener("click", function(){
    if(isBlack === true){
     document.getElementById("contenido").style.background = '#86FAAF';
     document.getElementById("aside").style.background = '#00D765';
     document.getElementById("info").style.background = '#00D765';
     document.getElementById("header").style.background = '#00B369';
     document.getElementById("footer").style.background = '#00D765';
    document.getElementById("nombre").style.color = '#86FAAF';
     document.body.style.color = "black";
     button.innerHTML = 'Modo Oscuro'
     isBlack = false
   } else {
     document.getElementById("contenido").style.background = "#BDBDBD";
     document.getElementById("aside").style.background = '#E0E0E0';
     document.getElementById("info").style.background = '#E0E0E0';
     document.getElementById("header").style.background = '#9E9E9E';
     document.getElementById("footer").style.background = '#E0E0E0';
     document.getElementById("nombre").style.color = 'white';
     button.innerHTML = 'Modo Claro'
     isBlack = true
   }
})
