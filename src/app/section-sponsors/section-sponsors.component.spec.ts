import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSponsorsComponent } from './section-sponsors.component';

describe('SectionSponsorsComponent', () => {
  let component: SectionSponsorsComponent;
  let fixture: ComponentFixture<SectionSponsorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSponsorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
