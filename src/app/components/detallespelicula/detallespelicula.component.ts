import { Component, OnInit } from '@angular/core';
import {PeliGeneroService} from './../../../services/peligenero.service';
import {Pelicula} from './../../../models/pelicula';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detallespelicula',
  templateUrl: './detallespelicula.component.html',
  styleUrls: ['./detallespelicula.component.css'],
  providers:[PeliGeneroService]
})
export class DetallespeliculaComponent implements OnInit {

  public pelicula:Pelicula;

  constructor(private _service:PeliGeneroService, private _activeRoute: ActivatedRoute) { }

  buscarPelicula(idPelicula){
    console.log(idPelicula);
    this._service.buscarPelicula(idPelicula).subscribe(response=>{
        this.pelicula=response;
    });
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
        var idPelicula=params.idPelicula;
        this.buscarPelicula(idPelicula);
    });

  }

}
