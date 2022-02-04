"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concessionaria = void 0;
const Carro_1 = __importDefault(require("./Carro"));
class Concessionaria {
    constructor(endereco) {
        this.endereco = endereco;
        this.lista_de_carros = [new Carro_1.default('landrouver', 4), new Carro_1.default('ferrari', 2), new Carro_1.default('nave do futuro', 8)];
    }
    fornecer_endereco() {
        return this.endereco;
    }
    mostra_lista_de_carros() {
        return this.lista_de_carros;
    }
}
exports.Concessionaria = Concessionaria;
