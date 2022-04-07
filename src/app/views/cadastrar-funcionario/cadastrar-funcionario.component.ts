import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {

  duplicado:boolean = false

  funcionario: Funcionario = {
    id_funcionario: '',
    func_cpf: '',
    func_nome: '',
    func_alimento: ''
  }

  constructor(private funcionarioService:FuncionarioService , private Route:ActivatedRoute ,
    private router:Router) { }

  ngOnInit() {

  }



  cadastrarApenasFuncionario(){
    this.funcionarioService.cadastrarApenasFuncionario(this.funcionario).subscribe({
      complete: () => {

        this.router.navigate([`/listaFuncionarios`])
      },
      error: () => {
        this.duplicado = true        
      },
      next: () => (console.log("Funcionário cadastrado"))

    })
    }

}
