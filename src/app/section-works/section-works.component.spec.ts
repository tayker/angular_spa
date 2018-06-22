import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWorksComponent } from './section-works.component';

describe('SectionWorksComponent', () => {
  let component: SectionWorksComponent;
  let fixture: ComponentFixture<SectionWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
