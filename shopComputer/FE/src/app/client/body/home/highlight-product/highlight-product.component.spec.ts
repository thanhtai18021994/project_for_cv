import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightProductComponent } from './highlight-product.component';

describe('HighlightProductComponent', () => {
  let component: HighlightProductComponent;
  let fixture: ComponentFixture<HighlightProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
