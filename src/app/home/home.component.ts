import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aub-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: Array<string> = [3, 14, 15].map((n) => `https://picsum.photos/id/${n}/900/500`)

  constructor() { }

  ngOnInit() {
  }

}
