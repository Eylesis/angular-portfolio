import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatSidenavContent, MatTabsModule, MatToolbarModule, MatIconModule,
        MatDividerModule, MatCardModule} from '@angular/material';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProjGridComponent } from './proj-grid/proj-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProjGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatSidenavModule, MatTabsModule, MatToolbarModule,MatIconModule, MatDividerModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
