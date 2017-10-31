import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleSiteComponent1Component } from './sample-site-component1.component';

describe('SampleSiteComponent1Component', () => {
  let component: SampleSiteComponent1Component;
  let fixture: ComponentFixture<SampleSiteComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleSiteComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleSiteComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
