import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {


  slogan: string = 'A melhor lojas de todas!';

  endereco: string = 'rua x de san martin'

  callToAction: string = 'Mostrar Destaques'
  oculto: boolean = true
  btnColor: string = "btn btn-primary"
  
  destaques: string[] = [
    "Produtos de informatica 30%OFF",
    "Produtos de limpeza com 20% a partir de R$300,00",
    "vale presentes de 100 na play store",
    "Gift Cards de valorante"

  ]

  constructor() { }


  onOculto() {
    this.oculto = !this.oculto
    if (this.oculto) {
      this.callToAction = "Mostrar Destaques"
    } else {
      this.callToAction = 'Ocultar Destaques'
    }
  }
  ngOnInit(): void {
  }

}
