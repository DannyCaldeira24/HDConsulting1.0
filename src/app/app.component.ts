import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Danny Caldeira';
  constructor() {

  }
  ngOnInit() {
    // $(document).ready(function() {
    //   $('.screenshots').waypoint(function() {
    //     $(".social").css({"visibility": "hidden"});
    //   }, {
    //     offset: '75%'
    //   });
    // });
  }

}
