/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SobreMimComponent } from './sobreMim.component';

describe('SobreMimComponent', () => {
  let component: SobreMimComponent;
  let fixture: ComponentFixture<SobreMimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreMimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreMimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
