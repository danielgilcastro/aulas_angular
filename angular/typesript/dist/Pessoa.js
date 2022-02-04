"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, carro_Preferido) {
        this.carro = 'nao possui';
        this.nome = nome;
        this.carro_Preferido = carro_Preferido;
    }
    dizer_nome() {
        return this.nome;
    }
    dizer_carro_Preferido() {
        return this.carro_Preferido;
    }
    comprar_carro(carro_comprado) {
        this.carro = carro_comprado;
    }
    dizer_carro_que_tem() {
        return this.carro;
    }
}
exports.Pessoa = Pessoa;
