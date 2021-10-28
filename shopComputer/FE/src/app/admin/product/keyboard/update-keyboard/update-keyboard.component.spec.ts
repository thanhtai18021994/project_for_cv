import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKeyboardComponent } from './update-keyboard.component';

describe('UpdateKeyboardComponent', () => {
  let component: UpdateKeyboardComponent;
  let fixture: ComponentFixture<UpdateKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
