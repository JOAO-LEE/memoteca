import { Component, OnInit } from '@angular/core';
import { PensamentoDTO } from '../model/pensamento.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {
  formulario!: FormGroup;


  constructor(private pensamentoService: PensamentoService, private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buscaPensamento();
  }

  criaFormularioPensamento(pensamento: PensamentoDTO): FormGroup {
    return this.formBuilder.group({
      id: [pensamento.id],
      conteudo: [pensamento.conteudo, Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      autoria: [pensamento.autoria, Validators.compose([Validators.required, Validators.minLength(3)])],
      modelo: [pensamento.modelo, [Validators.required]]
    })
  }

  buscaPensamento(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(id)
    this.pensamentoService.buscaPensamentoPorId(parseInt(id!)).subscribe((pensamento) => {
      this.formulario = this.criaFormularioPensamento(pensamento)
    });
  }

  editarPensamento(): void {
    // console.log(this.formulario.value)
    this.pensamentoService.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listar-pensamentos'])
    })

  }

  cancelar(): void {
    this.router.navigate(['/listar-pensamentos'])
  }

  desabilitaBotao(): string {
    if (!this.formulario.valid) {
      return 'botao__desabilitado'
    } else {
    return 'botao';
    }
  }
}
