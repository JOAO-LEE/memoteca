import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { PensamentoDTO } from '../model/pensamento.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: PensamentoDTO = {
    autoria: '',
    modelo: '',
    conteudo: '',

  }

  constructor(private pensamentoService: PensamentoService, private router: Router) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    console.log(this.pensamento.modelo)
    this.pensamentoService.createPensamentos(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar-pensamento'])
    });
  }


  cancelar() {
    this.router.navigate(['/listar-pensamento'])

  }

}
