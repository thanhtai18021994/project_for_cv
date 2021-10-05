import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMonitorComponent } from './list-monitor.component';

describe('ListMonitorComponent', () => {
  let component: ListMonitorComponent;
  let fixture: ComponentFixture<ListMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
