import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proof1Component } from './proof1.component';

describe('Proof1Component', () => {
  let component: Proof1Component;
  let fixture: ComponentFixture<Proof1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proof1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proof1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
