import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcAioServerComponent } from './pc-aio-server.component';

describe('PcAioServerComponent', () => {
  let component: PcAioServerComponent;
  let fixture: ComponentFixture<PcAioServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcAioServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcAioServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
