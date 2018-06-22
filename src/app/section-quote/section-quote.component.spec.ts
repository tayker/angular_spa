import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionQuoteComponent } from './section-quote.component';

describe('SectionQuoteComponent', () => {
  let component: SectionQuoteComponent;
  let fixture: ComponentFixture<SectionQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
