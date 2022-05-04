import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-data-base',
  templateUrl: './teste-data-base.component.html',
  styleUrls: ['./teste-data-base.component.css']
})
export class TesteDataBaseComponent implements OnInit {

  nome: string = "henrique";
  imagem1: string = "https://picsum.photos/200/300?random=1"
  link: string = "https://www.soulcodeacademy.org"
  heigth: number = 30
  labelLink: string = "acesse a soulcode"
  
  


  constructor() { }


  aumentarAltura(){
    this.heigth += 25
  } 

  diminuirAltura(){
    this.heigth -= 25
  } 
  limparBotao(){
    this.labelLink ='';
  } 


  ngOnInit(): void {
  }

}
