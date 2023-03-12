let arregloG = llenarArreglo();
let listaId = generadorDeId();
aplicarDoom();
function aplicarDoom(){

    for(let i = 0; i < 8;i++){
        let cambiar= document.querySelector("#"+listaId[i]);

        let hexadecimal = generarAleatorio(); 
        cambiar.style.background = hexadecimal;
        document.getElementById("hex" +(i+1)).innerHTML = hexadecimal;
    }
    
}

function generarAleatorio(){
    let hexadecimal ="#";
    for(let i = 0; i < 6;i++){
        hexadecimal = hexadecimal + arregloG[Math.floor(Math.random() * 16)];
    }
     return hexadecimal;
}

function llenarArreglo(){
    let arreglo = [];
    for(let i = 0; i < 10;i++){
        arreglo.push(i);
    }
    console.log(arreglo);
    
    for(let i =65; i <= 70; i++){
        let caracter = String.fromCharCode(i)
       arreglo.push(caracter.toLowerCase());
    }
    return arreglo;
}

function generadorDeId(){
    let ids =[];
    let text = "cuadro";
    for(let i = 1; i <= 8;i++){
        ids.push(text+i);
    }
    return ids;
}
