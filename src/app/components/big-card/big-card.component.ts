import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""
  @Input()
  linkReference:string = ""
<<<<<<< HEAD

  constructor() {}

  ngOnInit():void {
  }
=======
>>>>>>> 003c0db0a1e9c4b7fb5431d68adf59b85be1d255

  constructor() {}

  ngOnInit():void {
  }

}