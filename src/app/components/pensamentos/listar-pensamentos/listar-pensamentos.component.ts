import { Component, Input, OnInit } from '@angular/core';
import { PensamentoDTO } from '../model/pensamento.dto';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaDePensamentos: Array<PensamentoDTO> = []
  pagina: number = 1; 
  haMaisPensamentos: boolean = true; 
  filtro: string = '';
  favoritos: boolean = false;
  listaDeFavoritos: Array<PensamentoDTO> = [];
  titulo: string = 'Mural' 
;

  constructor(private pensamentoService: PensamentoService, private router: Router) { }

  ngOnInit(): void {
    this.pensamentoService.getPensamentos(this.pagina, this.filtro, this.favoritos).subscribe(pensamentos => {
      this.listaDePensamentos = pensamentos;
    });
  }

  recarregarPensamentos(): void {
    console.log('clicou')
    this.favoritos = false;
    this.pagina = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  carregarMaisPensamentos(): void {
    this.pensamentoService.getPensamentos(++this.pagina, this.filtro, this.favoritos).subscribe(pensamentosBuscados => {
      this.listaDePensamentos.push(...pensamentosBuscados)
      if (!pensamentosBuscados.length) {
        this.haMaisPensamentos = false;
      }
    });
  }

  buscarPensamentos(): void {
    this.haMaisPensamentos = true;
    this.pagina = 1;
    this.pensamentoService.getPensamentos(this.pagina, this.filtro, this.favoritos).subscribe(pensamentosBuscados => {
      this.listaDePensamentos = pensamentosBuscados;
    });
  }

  listarFavoritos(): void {
    this.titulo = 'Favoritos';
    this.haMaisPensamentos = true;
    this.favoritos = true;
    this.pagina = 1;
    this.pensamentoService.getPensamentos(this.pagina, this.filtro, this.favoritos).subscribe(pensamentos => {
      this.listaDePensamentos = pensamentos;
      this.listaDeFavoritos = pensamentos;
    });
  }

}
