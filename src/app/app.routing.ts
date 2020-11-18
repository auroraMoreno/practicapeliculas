import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DetallespeliculaComponent} from './../app/components/detallespelicula/detallespelicula.component';

const appRoutes: Routes =[
    {path:"detalles/:idPelicula",component:DetallespeliculaComponent}
]

export const appRoutingProvider: any[]=[]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
