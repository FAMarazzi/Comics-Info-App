import { RouterModule, Routes } from '@angular/router'; //importamos esto
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { Heroe } from './servicios/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent}, //home ruta por defecto
    {path: 'about', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'buscar/:id', component: BuscarComponent},
    {path: '**', redirectTo:'home'}        //redirecciona a home si surge algun error
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, /*{useHash:true} */);
// agrego el {useHash: true} si deseo que use numeral para dividir
//esto es importante porque si no está, a veces causa problemas