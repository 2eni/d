
export const obterElementos = (id) => document.getElementById(id);
export const valorNegativo = (valor) => valor < 0;

export const atualizarInterface = (conta) => {
    const mostrarValorDepositado = obterElementos(saldo);
    mostrarValorDepositado.textContent = `Saldo R$: ${saldo}`;

    const mostrarTempo = obterElementos(tempo);
    mostrarTempo.textContent = `Tempo Restante: ${valor} minutos`;

    const mostrarTroco = obterElementos(troco);
    mostrarTroco.textContent = `Troco: ${troco.toFixed(2)}`;
}

