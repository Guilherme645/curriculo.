/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaceiriasComponent } from './paceirias.component';

describe('PaceiriasComponent', () => {
  let component: PaceiriasComponent;
  let fixture: ComponentFixture<PaceiriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaceiriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaceiriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
