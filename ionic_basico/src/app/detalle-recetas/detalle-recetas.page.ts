import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Recetas } from 'src/app/interfase/recetas';
import { ResetasService } from '../service/resetas.service';

@Component({
  selector: 'app-detalle-recetas',
  templateUrl: './detalle-recetas.page.html',
  //styleUrls: ['./detalle-recetas.page.scss'],
})
export class DetalleRecetasPage implements OnInit {

  idReceta: number =  0;
  recetas: any;
  private recetasService: ResetasService;
  private router: Router;
  private activateRouter: ActivatedRoute;



  constructor( recetasService: ResetasService,
    router: Router,
    activateRouter: ActivatedRoute) { 
      this.recetasService = recetasService;
      this.router = router;
      this.activateRouter = activateRouter;

    }

  ngOnInit() {
    this.activateRouter.paramMap.subscribe((paramMap: any)=> {
      this.idReceta = Number.parseInt(paramMap.get('idReceta'));
      this.recetas = this.recetasService.getReceta(this.idReceta);
    });
  }

}
