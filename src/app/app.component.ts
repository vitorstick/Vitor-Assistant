import { Component, OnInit } from '@angular/core';


import { ServicesService } from './core/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app works!';



  constructor() {

  }

  public ngOnInit() {

  }

}
