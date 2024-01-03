import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {
  heroes: Heroe[]=[];
  termino: string='';
  constructor(private _heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>
      { 
        this.termino=params['id'];
        this.heroes=this._heroesService.buscarHeroes(params['id']);

      })
    
  }
  verHeroe(idx:number)
  {
    this.router.navigate( ['/heroe', idx]); 

  }

}
