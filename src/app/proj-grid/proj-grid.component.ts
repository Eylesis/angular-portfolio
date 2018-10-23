import { Component, OnInit } from '@angular/core';
import { projectCard } from '../projectCard';
import { PROJECTS } from '../mock-projs';
@Component({
  selector: 'app-proj-grid',
  templateUrl: './proj-grid.component.html',
  styleUrls: ['./proj-grid.component.css']
})
export class ProjGridComponent implements OnInit {

  items=PROJECTS;
  //items:Dict<string>= ['','','','','','','','','','','','']
  
  constructor() { }

  ngOnInit() {
  }

}
