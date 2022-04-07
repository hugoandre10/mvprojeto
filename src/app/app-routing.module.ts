import { EditarFuncionarioComponent } from './views/editar-funcionario/editar-funcionario.component';
import { CadastrarFuncionarioComponent } from './views/cadastrar-funcionario/cadastrar-funcionario.component';
import { ListaFuncionarioComponent } from './views/lista-funcionario/lista-funcionario.component';
import { HomeComponent } from './templates/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:"home" ,component:HomeComponent},
{path:"listaFuncionarios",component:ListaFuncionarioComponent},
{path:"cadastroFuncionarios",component:CadastrarFuncionarioComponent},
{path:"editarFuncionario/:id",component:EditarFuncionarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
