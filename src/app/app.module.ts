import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { GenerosComponent } from './components/generos/generos.component';
import { DetallespeliculaComponent } from './components/detallespelicula/detallespelicula.component';
import {routing, appRoutingProvider} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    GenerosComponent,
    DetallespeliculaComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
