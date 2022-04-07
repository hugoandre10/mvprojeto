import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HomeComponent } from './templates/home/home.component';
import { CadastrarFuncionarioComponent } from './views/cadastrar-funcionario/cadastrar-funcionario.component';
import { EditarFuncionarioComponent } from './views/editar-funcionario/editar-funcionario.component';
import { ListaFuncionarioComponent } from './views/lista-funcionario/lista-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CadastrarFuncionarioComponent,
    EditarFuncionarioComponent,
    ListaFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
