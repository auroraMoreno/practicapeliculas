import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import {Global} from './global';


@Injectable()
export class PeliGeneroService{
    private url: string;
    constructor(private _http:HttpClient) {
        this.url=Global.urlpeligenero;
    }

    getGeneros():Observable<any>{
        var request = "api/Generos"
        return this._http.get(this.url + request);
    }

    buscarPeliculas(idGenero:number):Observable<any>{
        var request = "api/peliculasgenero/" + idGenero;
        return this._http.get(this.url + request);
    }

    buscarPelicula(idPelicula):Observable<any>{
        var request = "api/Peliculas?idpeli=" + idPelicula;
        return this._http.get(this.url + request);
    }
    buscarPeliculasTitulo(titulo):Observable<any>{
        var request ="api/peliculastitulo/" + titulo;
        return this._http.get(this.url + request);
    }

}