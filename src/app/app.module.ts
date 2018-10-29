import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatSidenavContent, MatTabsModule, MatToolbarModule, MatIconModule,
        MatDividerModule, MatCardModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProjGridComponent } from './proj-grid/proj-grid.component';
import { ProjCardComponent } from './proj-card/proj-card.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectViewComponent } from './project-view/project-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProjGridComponent,
    ProjCardComponent,
    ProjectViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatSidenavModule, MatTabsModule, MatToolbarModule,MatIconModule, MatDividerModule, MatCardModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
