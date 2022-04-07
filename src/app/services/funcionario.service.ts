import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl: String = 'https://mv-projeto-1.herokuapp.com/mvprojeto'

  constructor(private http: HttpClient) { }


  mostrarTodosFuncionarios():Observable<Funcionario[]>{
    const url = `${this.baseUrl}/funcionario`
    return this.http.get<Funcionario[]>(url)
  }

  mostrarUmFuncionario(id_funcionario:string):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/${id_funcionario}`
    return this.http.get<Funcionario>(url)
  }


  cadastrarApenasFuncionario(funcionario:Funcionario):Observable<Funcionario>{
    const url = `${this.baseUrl}/apenasFuncionario`
    return this.http.post<Funcionario>(url,funcionario)
  }

  excluirFuncionario(id_funcionario:String):Observable<void>{
    const url = `${this.baseUrl}/funcionario/${id_funcionario}`
    return this.http.delete<void>(url)

  }

  editarApenasFuncionario(funcionario:Funcionario , id_funcionario:any):Observable<void>{
    const url = `${this.baseUrl}/editarApenasfuncionario/${id_funcionario}`
    return this.http.put<void>(url,funcionario)

  }

}
