


//let canvas = document.getElementById("canvas-juego")


let turno = 1

let matrix = 
[
 [0, 0, 0],
 [0, 0, 0],
 [0, 0, 0],
]
let listaNombres = ["00", "01", "02", "10", "11", "12", "20", "21", "22"]

function finJuego(){
    for (let i = 0; i < 3; i++){
        for (let a = 0; a < 3; a++){
            matrix[i][a] = 0;
        }
    }

    for (let i = 0; i < listaNombres.length; i++){
        let boton = document.getElementById(listaNombres[i])
        boton.style="background-color: black"
    }
}

function marcar(x, y){
    let nombre = x.toString() + y.toString(); 
    let boton = document.getElementById(nombre)
    if( matrix[x][y] == 1 || matrix[x][y] == 2){
        alert("ya esta marcado");
    }else{
        matrix[x][y] = turno;
        if( turno == 1){
            boton.style="background-color: white"
        }else{
            boton.style="background-color: blue"
        }
        
        comprobar();
    }
    if(turno == 1){
        turno = 2
    }else{
        turno = 1
    }

}

function comprobar(){
    for (let i = 0; i < 3; i++){
        contRow = 0
        contColumn = 0
        for (let a = 0; a < 3; a++){
            if(matrix[i][a] == turno){
                contRow+=1
            }
            if(matrix[a][i] == turno){
                contColumn+=1
            }
        }
        if(contRow == 3 || contColumn == 3){
            alert("El ganador es el jugador: " + turno)
            finJuego()
        }
    }
}

