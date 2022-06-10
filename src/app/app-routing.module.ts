import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemporadasComponent } from './componente/temporadas/temporadas.component';
import { LibrosComponent } from './componente/libros/libros.component';
import { JuegosComponent } from './componente/juegos/juegos.component';
import { NoticiasComponent } from './componente/noticias/noticias.component';

const routes: Routes = [
  {path:'temporadas',component:TemporadasComponent},
  {path:'libros',component:LibrosComponent},
  {path:'juegos',component:JuegosComponent},
  {path:'noticias',component:NoticiasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
