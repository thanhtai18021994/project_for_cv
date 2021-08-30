import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseKeysComponent } from './mouse-keys.component';

describe('MouseKeysComponent', () => {
  let component: MouseKeysComponent;
  let fixture: ComponentFixture<MouseKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
