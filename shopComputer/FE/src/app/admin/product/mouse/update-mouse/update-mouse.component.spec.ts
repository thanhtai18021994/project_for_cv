import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMouseComponent } from './update-mouse.component';

describe('UpdateMouseComponent', () => {
  let component: UpdateMouseComponent;
  let fixture: ComponentFixture<UpdateMouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
