export interface Produto {
imagem:string;
nomeDoProduto:string;
descricao:string;
emPromocao:boolean ;
preco:number;
desconto:number;
categoria: CategoriaProduto;
}



export enum CategoriaProduto{
    ELETRO= "eletro",
    MOVEIS= "moveis",
    LIMPEZA= "limpeza"
}
