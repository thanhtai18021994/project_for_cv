import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageComputerComponent } from './manage-computer.component';

describe('ManageComputerComponent', () => {
  let component: ManageComputerComponent;
  let fixture: ComponentFixture<ManageComputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageComputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
