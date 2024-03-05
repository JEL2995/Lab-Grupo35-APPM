import { Component, OnInit } from '@angular/core';
import { Recetas } from 'src/app/interfase/recetas';
import { ResetasService } from 'src/app/service/resetas.service';


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
})
export class RecetasPage implements OnInit {

  public recetas: Recetas[] = [];
  public recetasService: ResetasService

  constructor(recetasService: ResetasService) {
    this.recetasService = recetasService;
   }

  ngOnInit() {
    this.recetas = this.recetasService.getRecetas();
  }

}
