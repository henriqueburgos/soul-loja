import { Component, OnInit } from '@angular/core';
import { CategoriaProduto, Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {


  imagem1: string[] = ["https://picsum.photos/200/300?random=1","https://picsum.photos/200/300?random=10","https://picsum.photos/200/300?random=2","https://picsum.photos/200/300?random=9" ]

  produto1:Produto={
    imagem:"https://picsum.photos/200/300?random=1",
    nomeDoProduto: "nome do produto",
    descricao:"uma descrição insana",
    preco: 20.5,
    emPromocao:true,
    desconto: 0.1,
    categoria:CategoriaProduto.ELETRO

  }
  
  constructor() { }

  precoDesconto(){
    return this.produto1.preco -(this.produto1.preco*this.produto1.desconto)
  }

    onComprar(){
      alert("Produto adicionado no carrinho")
    }


  ngOnInit(): void {
  }

}
