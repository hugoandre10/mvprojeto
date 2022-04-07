import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

  duplicado:boolean = false

  funcionario: Funcionario = {
    id_funcionario: '',
    func_cpf: '',
    func_nome: '',
    func_alimento: ''
  }


  constructor(private funcionarioService:FuncionarioService ,
    private route:ActivatedRoute ,
    private router:Router) { }

    ngOnInit(): void {
      this.funcionario.id_funcionario = this.route.snapshot.paramMap.get("id")
      this.buscarUmFuncionario()
    }


    buscarUmFuncionario(){

      this.funcionarioService.mostrarUmFuncionario(this.funcionario.id_funcionario).subscribe((resultado => {
        this.funcionario = resultado;
      }))
    }


    editarFuncionario(){
      this.funcionarioService.editarApenasFuncionario(this.funcionario , this.funcionario.id_funcionario).subscribe({
        next: () => {"Funcionário editado com sucesso"} ,
        error: () => { this.duplicado = true} ,
       complete: () => {  this.router.navigate([`/listaFuncionarios`]) }
      })

    }

}
