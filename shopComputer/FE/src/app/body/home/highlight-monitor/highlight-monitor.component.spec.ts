import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightMonitorComponent } from './highlight-monitor.component';

describe('HighlightMonitorComponent', () => {
  let component: HighlightMonitorComponent;
  let fixture: ComponentFixture<HighlightMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
