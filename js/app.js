var arrayAscii=[];
var inputAscii;
do{
   do{
     var input= prompt("INGRESA TU NUMERO DE TARJETA DE CREDITO");

    if(input.length != 16 || input === ''){
         alert( 'RECUERDA DEBES INGRESAR 16 DIGITOS ');
      }else{

        for(var i=0; i< input.length;i++){
           var inputAscii=input.charCodeAt(i); // convierte el dato de entrada a codigo Ascii
           if(inputAscii>=48 && inputAscii<=57){
           arrayAscii.push(inputAscii); // coloca los resultados de codigo Ascii en un Arreglo
             // console.log(arrayAscii);
           }else{
             alert('INGRESASTE UN SIMBOLO INVALIDO...NOTA:INGRESA DIGITOS DEL 0 AL 9 ');
             break;
           }//cierra else

        }//cierra for en i
     }//cierre del else principal

   }while(inputAscii<48 || inputAscii>57); // vuelve a pedir al usuario el mensaje cuando ingresa numeros o caracteres especiales

}while(input.length!=16 || input === "");//vuelve a pedir al usuario el mensaje cuando no ongresa 16 digitos  y espacios en blanco
