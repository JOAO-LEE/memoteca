import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { PensamentoDTO } from '../model/pensamento.dto';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private pensamentoService: PensamentoService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Angular'],
      autoria: ['JoãoLeeeee'],
      modelo: ['modelo1']
    })
  }

  criarPensamento() {
    console.log(this.formulario.value)
    this.pensamentoService.createPensamentos(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listar-pensamentos']);
    });
  }


  cancelar() {
    this.router.navigate(['/listar-pensamentos']);
  }
}
