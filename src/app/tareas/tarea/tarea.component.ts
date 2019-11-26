import { Component, OnInit, Input } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'aub-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  /* al definir un input, he creado una propiedad html de ese componente. Y en ellos se puede
  inyectar el valor que de la gana desde el padre*/
  @Input() item: TareaModel;
  faTrashAlt: IconDefinition;

  constructor() { }

  ngOnInit() {
    this.faTrashAlt = faTrashAlt;
  }

  onChange(ev) {}

  onEdit(ev, i) {}

  onModify(ev, i) {}

  onDelete(i){}
}
