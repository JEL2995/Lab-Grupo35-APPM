import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Alumnos } from 'src/app/interfase/alumnos';


@Component({
  selector: 'app-datos-alumnos',
  templateUrl: './table-alumnos.component.html'
})
export class TableAlumnosComponent  implements OnInit {
  
  @Input() alumnosList:Alumnos[] = [];
  @Output() eliminar: any = new EventEmitter<Alumnos>();
  @Output() editar: any = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    
  }

}
