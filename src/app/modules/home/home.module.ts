import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './components/tabela/tabela.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    TabelaComponent,
    HomeComponent,
  FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
