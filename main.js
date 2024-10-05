let rondas= 5;
let puntoHumano= 0;
let puntosMaquina= 0;


for(let i= 1; i<= 5; i+=1){
function eleccionHumano() {
   let valHumano = prompt('¿piedra, papel o tijera?'); 

   while(valHumano!="piedra" && valHumano!="papel" && valHumano!="tijera"){

    alert("valor ingresados incorrectos. Digite de nuevo")
    valHumano= prompt("¿piedra, papel o tijera?")
   }

   alert("Valor escogido: "+valHumano)
   return valHumano


}


let valorHumano = eleccionHumano(); 



function getComputerChoice(val1, val2, val3) {
   const valores = [val1, val2, val3];
   const randomOpcion = Math.floor(Math.random() * valores.length); 
   return valores[randomOpcion]; 
}


const valorFinal = getComputerChoice('piedra', 'papel', 'tijera');
alert("Opción de la máquina: " + valorFinal);



    
   


function Ganador(eleccionHumano, getComputerChoice){

      if((eleccionHumano=="piedra" && getComputerChoice=="tijera") || (eleccionHumano=="papel" && getComputerChoice==="piedra") || (eleccionHumano=="tijera" && getComputerChoice=="papel")){
        alert("Ganaste! Rondas restantes: "+(rondas-i));
        puntoHumano++;
        alert(" tus puntos: "+puntoHumano)

      }
            else if(eleccionHumano==getComputerChoice){
                alert("Empate! Rondas restantes: "+(rondas-i));
            }

                else{
                    alert("Perdiste :(  Rondas restantes"+(rondas-i));
                    puntosMaquina++;
                    alert("Puntos de la maquina: "+puntosMaquina);
                }
                
             

}
Ganador(valorHumano,valorFinal );
    
}

if(puntoHumano>puntosMaquina){
    alert("Felicidades Ganaste, buena mi socio!// Puntos totales: "+puntoHumano)
}
else if(puntoHumano==puntosMaquina){
    alert("Es un empate!")
}
else{
    alert("Pierdes :(    //Puntos totales de la maquina: "+puntosMaquina );
}