import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKeyboardComponent } from './list-keyboard.component';

describe('ListKeyboardComponent', () => {
  let component: ListKeyboardComponent;
  let fixture: ComponentFixture<ListKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
