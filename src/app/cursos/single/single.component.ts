import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { AlumnoShorModel } from 'src/app/models/alumno.model';

@Component({
  selector: 'aub-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  fcNombre: FormControl;
  fcCurso: FormControl;
  userId: number;
  alumno: AlumnoShorModel;

  constructor(private activatedRouter: ActivatedRoute, private router: Router,
    private alumnosService: AlumnosService) { }

  ngOnInit() {
    this.fcNombre = new FormControl();
    this.fcCurso = new FormControl();
    
    /** el id del final es el nombre que le hemos dado al trozo variable de la url */
    this.userId = this.activatedRouter.snapshot.params.id;

    this.alumnosService.read(this.userId).subscribe( data => {
      this.alumno = data;
      this.fcNombre.setValue(data.name);
      this.fcCurso.setValue(data.curso);
    })
  }

  onEdit(){
    if(this.alumno.name != this.fcNombre.value ||
      this.alumno.curso != this.fcCurso.value){
    this.alumno.name = this.fcNombre.value;
    this.alumno.curso = this.fcCurso.value

    this.alumnosService.update(this.alumno).subscribe(data => {
     /* this.alumno = data;
      this.fcNombre.setValue(data.name);
      this.fcCurso.setValue(data.curso);
      */
     this.router.navigateByUrl(
      'cursos/alumnos'
    )
    }

    );
  }
}

  onDelete(){
    this.alumnosService.delete(this.userId).subscribe(() => {
      this.router.navigateByUrl(
        'cursos/alumnos'
      )
    });
  }

}
