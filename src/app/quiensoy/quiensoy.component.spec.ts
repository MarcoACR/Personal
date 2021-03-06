/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuiensoyComponent } from './quiensoy.component';

describe('QuiensoyComponent', () => {
  let component: QuiensoyComponent;
  let fixture: ComponentFixture<QuiensoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiensoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiensoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
