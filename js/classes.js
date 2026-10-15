// Definindo a Classe
export class parquimetro {
    constructor (conta) {
        this.conta = conta;
        this._troco = 0;
        this._saldo = 0;
        this._tempo = 0;
    }

    // getters
    get saldo(){
        return this._saldo;
    }
    get tempo(){
        return this._tempo;
    }
    get troco(){
        return this._troco;
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
}