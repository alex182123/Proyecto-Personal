const input = document.getElementById("input");
const SpanError = document.getElementById("spanerror");
let valor = "";
const agregarValor = (numero)=>{
    valor += numero;
    input.value = valor;
};
const Resolver = ()=>{
    let inputlenght = input.value.length;
    if(valor.includes("+") || valor.includes("-") || valor.includes("*") || valor.includes("/")){
        SpanError.textContent  = ""
        let result = eval(valor);
        input.value = result;
    }else{
        SpanError.textContent  = "Ingrese una operacion valida"
    }
    
};

const QuitarUnNumero = ()=>{
    let inputlenght = input.value.length;
    if(inputlenght != 0){
        valor = input.value.substring(input.value.lenght,input.value.lenght - 1);
        input.value = valor;
    }
}
