/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LigarComponent } from './ligar.component';

describe('LigarComponent', () => {
  let component: LigarComponent;
  let fixture: ComponentFixture<LigarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
