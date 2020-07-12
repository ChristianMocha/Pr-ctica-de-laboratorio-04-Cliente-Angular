import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pageabout404Component } from './pageabout404.component';

describe('Pageabout404Component', () => {
  let component: Pageabout404Component;
  let fixture: ComponentFixture<Pageabout404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pageabout404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pageabout404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
