// modularizacão (ES Modules)
import {parquimetro} from "./classes.js";
import  {valorNegativo, atualizarInterface} from "./utils.js";

const conta = new parquimetro();

// Manipulacão do DOM
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (evento)=> {
    // Prevenção do comportamento padrão
    evento.preventDefault();

    const valorInformado = formulario.elements.valor.value;

    if(valorNegativo(valorInformado)){
        alert("Valor inválido. O valor não poder ser negativo");
        return;
    }
    // adiciona dinheiro ao saldo
    conta.addSaldo(valorInformado);

    // Cada R$ 1,00 = 30 minutos
    const valorUtilizado = Math.floor(conta._saldo);
            
    conta.addTempo(conta._saldo);

    // calcula troco
    conta._troco = conta._saldo - valorUtilizado;
    atualizarInterface(conta);
    document.getElementById("botao").disabled = true;
    formulario.reset();
})

