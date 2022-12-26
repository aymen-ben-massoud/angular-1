import { Component, OnInit } from '@angular/core';
declare var sc: any;

declare var show: any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    new sc()
    new show()
  
  }

}
