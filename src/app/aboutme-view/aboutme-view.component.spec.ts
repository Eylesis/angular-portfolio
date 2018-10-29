import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeViewComponent } from './aboutme-view.component';

describe('AboutmeViewComponent', () => {
  let component: AboutmeViewComponent;
  let fixture: ComponentFixture<AboutmeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutmeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
