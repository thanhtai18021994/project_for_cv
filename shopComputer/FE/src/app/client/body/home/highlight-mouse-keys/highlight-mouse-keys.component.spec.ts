import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightMouseKeysComponent } from './highlight-mouse-keys.component';

describe('HighlightMouseKeysComponent', () => {
  let component: HighlightMouseKeysComponent;
  let fixture: ComponentFixture<HighlightMouseKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightMouseKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightMouseKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
