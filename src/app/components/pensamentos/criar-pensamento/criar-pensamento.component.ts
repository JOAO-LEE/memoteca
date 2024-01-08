import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: 1,
    conteudo: "Estudar Angular",
    autoria: "Um dev" 
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert("criado...")
  }


  cancelar() {
    alert("cancelado...")
  }

}
