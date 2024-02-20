import { Component, Input, OnInit } from '@angular/core';
import { PensamentoDTO } from '../model/pensamento.dto';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
@Input() pensamento: PensamentoDTO = {
  id: 12,
  autoria: '',
  conteudo: '',
  modelo: '',
  favorito: false
};

  constructor() {}

  ngOnInit(): void {}


  larguraPensamento(): string {
    if (this.pensamento.conteudo.length > 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  setFavorito(): string {
    if (this.pensamento.favorito) {
      return 'ativo'
    }
    return 'inativo'
  }

}