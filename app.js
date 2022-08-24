let nombre,numero1,numero2, resultado;
numero1 = parseInt(prompt("Ingrese un numero"));
numero2 = parseInt(prompt("Ingrese el segundo numero"));
resultado = numero1 + numero2;
if(resultado > 10){
    document.write(resultado)
}else{
    document.write("La suma debe ser mayor a 10")
}