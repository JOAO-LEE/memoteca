import { Component, OnInit } from '@angular/core';
import { PensamentoDTO } from '../model/pensamento.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: PensamentoDTO = {
    id: 0,
    autoria: '',
    conteudo: '',
    modelo: ''
  }

  constructor(private pensamentoService: PensamentoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.pensamentoService.buscaPensamentoPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    });
  }

  editarPensamento(): void {
    this.pensamentoService.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar-pensamentos'])
    })

  }

  cancelar(): void {
    this.router.navigate(['/listar-pensamentos'])
  }

}
