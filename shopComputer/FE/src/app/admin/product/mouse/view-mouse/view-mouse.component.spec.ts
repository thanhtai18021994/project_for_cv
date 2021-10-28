import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMouseComponent } from './view-mouse.component';

describe('ViewMouseComponent', () => {
  let component: ViewMouseComponent;
  let fixture: ComponentFixture<ViewMouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
