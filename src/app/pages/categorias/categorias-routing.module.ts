import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoriaListaComponent} from './categoria-lista/categoria-lista.component';
import {CategoriaFormComponent} from './categoria-form/categoria-form.component';

const routes: Routes = [
  { path: '', component: CategoriaListaComponent },
  { path: 'new', component: CategoriaFormComponent},
  { path: ':id/edit', component: CategoriaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
