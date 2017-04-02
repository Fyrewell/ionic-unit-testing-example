import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Page1 } from "./page1";
import { IonicModule, NavController } from "ionic-angular/index";

import { Http } from '@angular/http';

import { WtfService } from '../../providers/wtf-service';
import { WtfServiceFactory } from '../../factory/wtf-service-factory';

import {} from 'jasmine';

describe('Page1', () => {
  let de: DebugElement;
  let comp: Page1;
  let fixture: ComponentFixture<Page1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1 ],
      imports: [
        IonicModule.forRoot(Page1)
      ],
      providers: [
        NavController,
        {provide: WtfService, useFactory: WtfServiceFactory, deps:[Http]}
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h3'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h3> text', (done) => {

      setTimeout(() => {
        fixture.detectChanges();
        const h3 = de.nativeElement;
        expect(h3.innerText).toMatch(/mock/i,
          '<h3> should say something about "Mock"');
        done();
      }, 1000);

    }, 2000);

  });
