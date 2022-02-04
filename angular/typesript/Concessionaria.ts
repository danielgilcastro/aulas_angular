import Carro , {} from './Carro'

export class Concessionaria {
    private endereco: string
    private lista_de_carros: Carro[]

    constructor(endereco: string) {
        this.endereco = endereco
        this.lista_de_carros = [new Carro('landrouver', 4), new Carro('ferrari', 2), new Carro('nave do futuro', 8)]
    }

    public fornecer_endereco(): string {
        return this.endereco
    }
    public mostra_lista_de_carros(): any {
        return this.lista_de_carros
    }

}