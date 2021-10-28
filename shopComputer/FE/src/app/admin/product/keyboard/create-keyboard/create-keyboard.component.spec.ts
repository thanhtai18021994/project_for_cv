import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKeyboardComponent } from './create-keyboard.component';

describe('CreateKeyboardComponent', () => {
  let component: CreateKeyboardComponent;
  let fixture: ComponentFixture<CreateKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
