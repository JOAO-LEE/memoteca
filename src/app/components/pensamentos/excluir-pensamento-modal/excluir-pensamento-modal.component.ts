import { Component, OnInit } from '@angular/core';
import { PensamentoDTO } from '../model/pensamento.dto';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento-modal',
  templateUrl: './excluir-pensamento-modal.component.html',
  styleUrls: ['./excluir-pensamento-modal.component.css']
})
export class ExcluirPensamentoModalComponent implements OnInit {

  pensamento: PensamentoDTO = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  constructor(private pensamentoService: PensamentoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pensamentoService.buscaPensamentoPorId(parseInt(id!)).subscribe(pensamento => {
      this.pensamento = pensamento;
    })
  }

  
  excluirPensamento(): void {
    if (this.pensamento.id) {
      this.pensamentoService.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listar-pensamentos'])
      })
    }
  }

  cancelar(): void {
    this.router.navigate(['/listar-pensamentos'])

  }
  
}
