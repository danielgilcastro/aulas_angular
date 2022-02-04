"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(modelo, numero_de_portas) {
        this.modelo = modelo;
        this.numero_de_portas = numero_de_portas;
        this.velocidade = 0;
    }
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    frear() {
        this.velocidade = 0;
    }
    velocidade_atual() {
        return this.velocidade;
    }
}
exports.Carro = Carro;
