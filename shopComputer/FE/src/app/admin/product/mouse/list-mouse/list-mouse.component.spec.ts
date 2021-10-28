import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMouseComponent } from './list-mouse.component';

describe('ListMouseComponent', () => {
  let component: ListMouseComponent;
  let fixture: ComponentFixture<ListMouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
