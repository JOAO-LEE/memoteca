import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaDePensamentos = [{
    conteudo: 'I love pagode and Angular',
    modelo: 'modelo1',
    autoria: 'João Lee'
  }, 
  {
    conteudo: 'I love Dell and Apple Computers!',
    modelo: 'modelo2',
    autoria: 'João Lee'
  }]  

  constructor() { }

  ngOnInit(): void {
  }

}
