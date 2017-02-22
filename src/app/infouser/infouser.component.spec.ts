/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InfouserComponent } from './infouser.component';

describe('InfouserComponent', () => {
  let component: InfouserComponent;
  let fixture: ComponentFixture<InfouserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfouserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
