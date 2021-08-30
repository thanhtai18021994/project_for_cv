import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightPcComponent } from './highlight-pc.component';

describe('HighlightPcComponent', () => {
  let component: HighlightPcComponent;
  let fixture: ComponentFixture<HighlightPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
