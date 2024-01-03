import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[]=[];
  
  constructor( private _heroesService: HeroesService,
               private router:Router) { 
    //de esta manera estoy creando una instancia de servicio (o algo asi)
    //y directamente cuando se ejecute este constructor
    //va a llamar inmediatamente al constructor de la clase de servicio. 

    //el constructor se ejecuta mucho antes que el ngoninit
  
   }

   //el ngoninit se usa para hacer las cosas cuando ya toda la app está renderizada
   //lista para ser utilizada
  ngOnInit() {
    this.heroes=this._heroesService.getHeroes();
    console.log(this.heroes);
  }
  verHeroe(idx:number)
  {
    this.router.navigate( ['/heroe', idx]); 

  }
}
