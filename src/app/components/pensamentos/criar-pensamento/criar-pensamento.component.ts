import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { PensamentoDTO } from '../model/pensamento.dto';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private pensamentoService: PensamentoService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.criaFormularioPensamento();
  }

  criaFormularioPensamento(): FormGroup {
    return  this.formBuilder.group({
      conteudo: ['', Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      autoria: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      modelo: ['', [Validators.required]]
    })
  }
 
  criarPensamento(): void {
    if (this.formulario.valid) {
      this.pensamentoService.createPensamentos(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listar-pensamentos']);
      });
    }
  }


  cancelar(): void {
    this.router.navigate(['/listar-pensamentos']);
  }

  desabilitaBotao(): string {
    if (!this.formulario.valid) {
      return 'botao__desabilitado'
    } else {
      return 'botao';
    }
  }
}
