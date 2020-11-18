import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Genero } from 'src/models/genero';
import { Pelicula } from 'src/models/pelicula';
import {PeliGeneroService} from './../../../../src/services/peligenero.service';


@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css'],
  providers:[PeliGeneroService]
})
export class GenerosComponent implements OnInit {

  public generos: Array<Genero>;
  public peliculas:Array<Pelicula>;
  public titulos:Array<Pelicula>;
  @ViewChild("selectGenero") selectGenero : ElementRef;
  @ViewChild("cajaTitulo") cajaTitulo:ElementRef;

  buscarTitulo(){
    var titulo = this.cajaTitulo.nativeElement.value;
    console.log(titulo);
    this._service.buscarPeliculasTitulo(titulo).subscribe(response=>{
      this.titulos=response;
      console.log(this.titulos);
    },error=>{
      console.log(error);
    });
  }

  buscarGenero(){
    var nombreGenero = this.selectGenero.nativeElement.value;
    console.log(nombreGenero);
    this._service.buscarPeliculas(nombreGenero).subscribe(response=>{
      this.peliculas = response;
      console.log(this.peliculas);
    },error=>{
      console.log(error);
    });
  }

  constructor(private _service:PeliGeneroService) {
    this.peliculas=[],
    this.titulos=[]
   }

  mostrarGeneros(){
    this._service.getGeneros().subscribe(response=>{
        this.generos = response;
    });
  }

  ngOnInit(): void {
    this.mostrarGeneros();
  }

}
