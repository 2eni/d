// Definindo a Classe
class parquimetro {
    constructor (conta) {
        this.conta = conta;
        this._troco = 0;
        this._saldo = 0;
        this._tempo = 0;
    }
    // Definindo metodos

    addSaldo (valor){
        this._saldo += valor;
    }

    addTempo (valor){
        this._tempo += valor*30/60;
    }

    addTroco (saldo){
        const valorUsado = Math.floor(saldo)*1;
        this.troco = saldo - valorUsado;
    }

    mostrarValorDepositado(saldo){
        document.getElementById("saldo").textContent = `Saldo R$: ${saldo.toFixed(2)}`
    }

    mostrarTempo(valor){
        document.getElementById("tempo").textContent = `Tempo Restante: ${valor} minutos`
    }

    mostrarTroco(troco){
        document.getElementById("troco").textContent = `Troco: ${troco.toFixed(2)}`
    }
    
    resetar (){
        document.getElementById("depositar").value =  ""
    }

    bloqBotao (){
        document.getElementById("botao").disabled = true;
    }

    get saldo(){
        return this._saldo;
    }

    get tempo(){
        return this._tempo;
    }

    get troco(){
        return this._troco;
    }
    
    calcular() {
        const valorDeposito = parseFloat(document.getElementById("depositar").value);
        if (isNaN (valorDeposito) ||  valorDeposito < 1) {
            alert("Valor insuficiente")
        } else  {
            // adiciona dinheiro ao saldo
            this.addSaldo(valorDeposito);

            // Cada R$ 1,00 = 30 minutos
            const valorUtilizado = Math.floor(this._saldo);
            
            this.addTempo(this._saldo);

            // calcula troco
            this._troco = this._saldo - valorUtilizado;

            // mostrar os resultados
            this.mostrarValorDepositado(this.saldo);
            this.mostrarTempo(this.tempo);
            this.mostrarTroco(this.troco);

            // resetar caixa
            this.resetar()

            // desabilitar botao
            document.getElementById("botao").disabled = true; 
        }
               
    }
}

const conta =  new parquimetro();