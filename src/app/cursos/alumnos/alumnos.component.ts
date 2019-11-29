import { Component, OnInit } from '@angular/core';
import { AlumnoShorModel } from 'src/app/models/alumno.model';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'aub-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos: Array<AlumnoShorModel>;

  fcNombre: FormControl;
  fcCurso: FormControl;

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
    this.fcNombre = new FormControl();
    this.fcCurso = new FormControl();
    this.alumnosService.readAll().subscribe((data) => {
      console.log(data)
      this.alumnos = data
    })
  }

  onAdd(){
    if(!this.fcNombre.value || !this.fcCurso.value){
      return;
    }
    let alumno = new AlumnoShorModel(null, this.fcNombre.value, this.fcCurso.value);
    this.alumnosService.create(alumno).subscribe(
      data => {
        console.log(data)
        this.alumnos.push(data);
      }
    );
  }

}
