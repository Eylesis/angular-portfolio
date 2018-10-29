import {projectCard} from './projectCard';
import { PROJECTS } from './mock-projs';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProjectService {

  getProjects(): Observable<projectCard[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(PROJECTS);
  }
 
  getProject(id: number): Observable<projectCard> {
    // TODO: send the message _after_ fetching the hero
    return of(PROJECTS.find(items => items.id === id));
  }

  constructor() { }
}
