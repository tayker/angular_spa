import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPricesComponent } from './section-prices.component';

describe('SectionPricesComponent', () => {
  let component: SectionPricesComponent;
  let fixture: ComponentFixture<SectionPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
