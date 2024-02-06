import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  pensamento = {
    conteudo: 'I love Angular <3',
    autoria: "João Lee",
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
