import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewKeyboardComponent } from './view-keyboard.component';

describe('ViewKeyboardComponent', () => {
  let component: ViewKeyboardComponent;
  let fixture: ComponentFixture<ViewKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
