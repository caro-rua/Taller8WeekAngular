import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componente/barra/barra.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { FooterComponent } from './componente/footer/footer.component';
import { TemporadasComponent } from './componente/temporadas/temporadas.component';
import { LibrosComponent } from './componente/libros/libros.component';
import { JuegosComponent } from './componente/juegos/juegos.component';
import { NoticiasComponent } from './componente/noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    InicioComponent,
    FooterComponent,
    TemporadasComponent,
    LibrosComponent,
    JuegosComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
