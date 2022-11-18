import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generalreport',
  templateUrl: './generalreport.component.html',
  styleUrls: ['./generalreport.component.scss']
})
export class GeneralreportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  printThisPage(){
    window.print();
  }

}
