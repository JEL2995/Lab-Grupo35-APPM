import { Component, OnInit } from '@angular/core'
import { Alumnos } from '../interfase/alumnos'
import { AlumnoService } from '../service/alumno.service'

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html'
  //styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  alumnos:Alumnos[]= [];
  nombre: string = '';
  matricula: string ='';
  estado: string = '';
  idActualizar: any;
  error: boolean = false;


  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.alumnoService.setAlumnos([
      {id:1, nombre: 'Juan Angel' 
        ,matricula: '2011968'},
      {id:2, nombre: 'Isela Ramirez',
      matricula: '91982324'},
      {id:3, nombre: 'Flor',
      matricula: '3125677'}
    ]
    );
    this.alumnos = this.alumnoService.getAlumnos();
    this.estado ='guardar';

    }
    public guardar(){
      if( (this.nombre == undefined || this.nombre == '' ) || 
      (this.matricula == undefined || this.matricula == '') ) {
      this.error = true;
      return;
      }  
      let alumno: Alumnos={
        nombre: this.nombre,
        matricula: this.matricula
      };

      if (this.estado ==='actualizar'){
        alumno.id = this.idActualizar;
        this.alumnos = this.alumnoService.actualiza(alumno);
      }
      if(this.estado === 'guardar'){
        this.alumnoService.agregarAlumno(alumno);
        this.alumnos = this.alumnoService.getAlumnos();
      }
      this.cancelar();
    }

    public cancelar(){
      this.estado = 'guardar';
      this.matricula = '';
      this.nombre = '';
      this.error = false;
    }

    public eliminar(id:number){
      this.alumnoService.borrarAlumno(id);
      this.alumnos = this.alumnoService.getAlumnos();
    }
  
    public editar(alumno:Alumnos){
      this.estado = 'actualizar';
      this.matricula = alumno.matricula;
      this.nombre = alumno.nombre;
      this.idActualizar = alumno.id;
    }
  

}
