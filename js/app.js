
//4152313380623160
var input;
function isValidCard(input){

var inputAscii;
var arrayAscii=[];
var reverseArrayAscii=[];
var str;
var arrayInt=[];
var multyPar;
var sumaDigits;
var sumTotal=0;
var cardValid;
var cardInvalid;
do{
do{
input= prompt("INGRESA TU NUMERO DE TARJETA DE CREDITO");

if(input.length != 16 || input === ''){
 alert( 'RECUERDA DEBES INGRESAR 16 DIGITOS ');
}else{

 for(var i=0; i< input.length;i++){
    inputAscii=input.charCodeAt(i);
    if(inputAscii>=48 && inputAscii<=57){
      arrayAscii.push(inputAscii);

     }else{
       alert('INGRESASTE UN SIMBOLO INVALIDO...NOTA:INGRESA DIGITOS DEL 0 AL 9 ');
     break;
    }//cierra else

  }//cierra for en i

 reverseArrayAscii=arrayAscii.reverse(); // se invierte el arreglo obtenido en el for

 for(var j=0;j<reverseArrayAscii.length; j ++){
    str= String.fromCharCode(reverseArrayAscii[j]);//se convierte cada valor en Ascii a texto convencional.

    arrayInt.push(parseInt(str));//se convierte la String a un Entero y se Agrega a un arreglo

  }//cierre del for en j
 //console.log(reveArrayAscii);

for(var k=0;k<arrayInt.length;k++){
   if((k+1)%2===0){
       multyPar=arrayInt[k]*2;

      if(multyPar>=10){
        sumaDigits=(multyPar-10)+1;// Se tiene que convertir el valor de 10 a un solo digito por esta razon se le resta la base de 10 a todos y se suma el numero 1 ya que este es el que se encuentra como base en cada numero que es mayor a 10 ya que la multiplicacion no puede dar mas de 18

         arrayInt[k]=sumaDigits;//manda el resultado de la suma de los digitos  a la posicion correspondiente del arreglo

     }else {//if que se encuentra anidado en el if que esta dentro del for en k.
         arrayInt[k]=multyPar;//se asigna directamente el valor multiplicado por 2 cuyo resultado no es mayor a 10.
     }//cierra el else de multyParResult.

  } //cierra el if dentro del for en k

  sumTotal +=arrayInt[k]; // suma cada valor de cada una de las posiciones del arreglo en k
  //console.log(sumTotal);

}//cierra el for en k

if(sumTotal%10===0){
//console.log(sumTotal);

 cardValid=alert("EL NUMERO DE TU TARJETA DE CREDITO ES VALIDA");
 return cardValid;
}else{//Cierra el if que se encuentra dentro del for en j
// console.log(sumTotal);
cardInvalid=alert( " EL NUMERO DE TU TARJETA ES INVALIDO ");
return cardInvalid;
}//cierra el else de la suma total

}//cierre del else principal donde se validan que se ingresen digitos

}while(inputAscii<48 || inputAscii>57);

}while(input.length!=16 || input === "");

}//Cierra la Funcion
isValidCard(input);
