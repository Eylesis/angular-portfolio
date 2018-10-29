import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }      from './main/main.component';
import { ProjectViewComponent } from 'src/app/project-view/project-view.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'projects/:id', component: ProjectViewComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}