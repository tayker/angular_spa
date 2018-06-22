import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsMembersComponent } from './sections-members.component';

describe('SectionsMembersComponent', () => {
  let component: SectionsMembersComponent;
  let fixture: ComponentFixture<SectionsMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionsMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
