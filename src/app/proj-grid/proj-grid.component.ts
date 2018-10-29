import { Component, OnInit } from '@angular/core';
import { projectCard } from '../projectCard';
//import { PROJECTS } from '../mock-projs';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-proj-grid',
  templateUrl: './proj-grid.component.html',
  styleUrls: ['./proj-grid.component.css']
})
export class ProjGridComponent implements OnInit {

  items: projectCard[];

  constructor(private projectService: ProjectService) { }
  
    ngOnInit() {
      this.getProjects();
    }
  
    getProjects(): void {
      this.projectService.getProjects()
      .subscribe(items => this.items = items);
    }
}
