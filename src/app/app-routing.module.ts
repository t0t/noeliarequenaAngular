import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcercaComponent } from './acerca/acerca.component';
import { WorksComponent } from './works/works.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', component: WorksComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'works', component: WorksComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
