import { Component, Input, OnInit } from '@angular/core';
import { PensamentoDTO } from '../model/pensamento.dto';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
@Input() pensamento: PensamentoDTO = {
  id: 0,
  autoria: '',
  conteudo: '',
  modelo: '',
  favorito: false
};

@Input() listaFavoritos: PensamentoDTO[] = [];

  constructor(private pensamentoService: PensamentoService) {}

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

  favoritar() {
    this.pensamento.favorito = !this.pensamento.favorito;
    this.pensamentoService.editar(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)
    });
  }

}