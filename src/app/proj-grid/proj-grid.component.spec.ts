import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjGridComponent } from './proj-grid.component';

describe('ProjGridComponent', () => {
  let component: ProjGridComponent;
  let fixture: ComponentFixture<ProjGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
