import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFactsComponent } from './section-facts.component';

describe('SectionFactsComponent', () => {
  let component: SectionFactsComponent;
  let fixture: ComponentFixture<SectionFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
