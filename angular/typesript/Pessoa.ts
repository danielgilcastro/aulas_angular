export class Pessoa {
    private nome: string
    private carro_Preferido: string
    private carro: string ='nao possui'

    constructor(nome: string, carro_Preferido:string) {
        this.nome = nome
        this.carro_Preferido = carro_Preferido
    }

    public dizer_nome(): string {
        return this.nome;
    }
    public dizer_carro_Preferido(): string {
        return this.carro_Preferido
    }
    public comprar_carro(carro_comprado:any): void{
        this.carro = carro_comprado
    }
    public dizer_carro_que_tem():any{
        return this.carro
    }

}