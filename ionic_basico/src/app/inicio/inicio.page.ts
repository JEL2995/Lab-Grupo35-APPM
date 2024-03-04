import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfase/personaje';
import { EnvioReceptorService } from '../service/envio-receptor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html'
})
export class InicioPage implements OnInit {

  user: Personaje = {name:'Pedro Perez object', userid:"34523452345234523452345", email:"correo@gmail.com"};

  list: Personaje[]=
  [
    {name:'Pedro Perez 1', userid:"34523452345234523452345", email:"correo@gmail.com"},
    {name:'Pedro Perez 2', userid:"34523452345234523452345", email:"correo@gmail.com"},
    {name:'Pedro Perez 3', userid:"34523452345234523452345", email:"correo@gmail.com"}
  ];


  constructor( private envioReceptor: EnvioReceptorService,
    private router: Router) { }

  ngOnInit() {
  }

  redireccionReceptor(){
    this.envioReceptor.sendObjectSource(this.user);
    this.envioReceptor.sendListSource(this.list);

    this.router.navigate(['/receptor']);
  }
}
