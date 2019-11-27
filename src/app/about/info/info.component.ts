import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aub-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() titulo: string;
  @Input() autor: string;

  constructor() { }

  ngOnInit() {
  }

}
