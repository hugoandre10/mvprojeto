import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrls: ['./lista-funcionario.component.css']
})
export class ListaFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[] = []
  closeResult:any

  constructor(private funcionarioService:FuncionarioService,
    private route:ActivatedRoute ,
    private router:Router,
    private modalService: NgbModal ,
    
    ) { }

  ngOnInit(): void {
    this.mostrarTodosFuncionarios()
  }



  mostrarTodosFuncionarios() {
    this.funcionarioService.mostrarTodosFuncionarios().subscribe(resultado => {

      this.funcionarios = resultado

    })


  }


  open(content: any) {

    this.modalService.open(content, { size: 'md' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  excluirFuncionario(id_funcionario:String){
    this.funcionarioService.excluirFuncionario(id_funcionario).subscribe({
      error: () => { 
      this.router.navigate([`/listaFuncionarios`]) } ,
      complete: () => {
        console.log('deletado');
        location.reload()
      }
    })
  }

}
