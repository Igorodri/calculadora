const numero1 = document.getElementById("n1");
const numero2 = document.getElementById("n2");
const seletor = document.getElementById("seletor")
const resposta = document.getElementById("resposta");

seletor.addEventListener("change",calcular)
numero1.addEventListener("keyup",calcular);
numero2.addEventListener("keyup",calcular);

function calcular(){

    if(numero1.value != "" && numero2.value){

        const valor1 = parseFloat(numero1.value);
        const valor2 = parseFloat(numero2.value);
        const op = seletor.value;

        switch(op){
            case "somar":
                resposta.innerHTML = valor1 + valor2;
                resposta.style.backgroundColor = "green";
                break;

            case "subtrair":
                resposta.innerHTML = valor1 - valor2;
                resposta.style.backgroundColor = "green";
                break;

            case "multiplicacao":
                resposta.innerHTML = valor1 * valor2;
                resposta.style.backgroundColor = "green";
                break;

            case "divisao":
                if(valor1 != 0){
                    resposta.innerHTML = valor1 / valor2;
                    resposta.style.backgroundColor = "green";
                }else{
                    resposta.innerHTML = "Não se pode dividir nada por zero"
                    resposta.style.backgroundColor = "red";
                }
            
                break;

            default:
                resposta.innerHTML = "Error"
                resposta.style.backgroundColor = "red";

        }
    
  
    }else{
        resposta.style.backgroundColor = "red";
        resposta.innerHTML = "Campo vazio"
    }

    if(numero1.value == "" && numero2.value == ""){
        resposta.style.backgroundColor = "white";
        resposta.innerHTML = "";
    }
}



