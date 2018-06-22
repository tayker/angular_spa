import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCommunityComponent } from './section-community.component';

describe('SectionCommunityComponent', () => {
  let component: SectionCommunityComponent;
  let fixture: ComponentFixture<SectionCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
