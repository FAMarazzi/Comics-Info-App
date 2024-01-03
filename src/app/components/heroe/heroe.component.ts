import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{
  heroe:any={}; //creamos objeto de tipo any
 
  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService ) {

   this.activatedRoute.params.subscribe( params =>{
      this.heroe=this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    
    
    //esto muestra por consola el parametro de nombre id
    //se enlaza con el id que nombramos en la ruta configurada
    //en routes.ts
   })
   
  }
}
