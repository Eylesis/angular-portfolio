import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {projectCard} from '../projectCard'
import { ProjectService }  from '../project.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {
  item: projectCard;
  opened: boolean = true;
  
  constructor( private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'github',
        sanitizer.bypassSecurityTrustResourceUrl('assets/github.svg'));
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
      .subscribe(item => this.item = item);
  }
}
