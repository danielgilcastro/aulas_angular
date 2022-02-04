export  class Carro {
    private modelo: string
    private numero_de_portas: number
    private velocidade: number

    constructor(modelo: string, numero_de_portas: number) {
        this.modelo = modelo
        this.numero_de_portas = numero_de_portas
        this.velocidade = 0
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10;
    }

    public frear(): void {
        this.velocidade = 0;
    }

    public velocidade_atual(): number {
        return this.velocidade;
    }

}

