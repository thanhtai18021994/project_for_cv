import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightAccessoriesComponent } from './highlight-accessories.component';

describe('HighlightAccessoriesComponent', () => {
  let component: HighlightAccessoriesComponent;
  let fixture: ComponentFixture<HighlightAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
