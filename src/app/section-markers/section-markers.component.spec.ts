import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMarkersComponent } from './section-markers.component';

describe('SectionMarkersComponent', () => {
  let component: SectionMarkersComponent;
  let fixture: ComponentFixture<SectionMarkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionMarkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
