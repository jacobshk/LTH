import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerHomepageComponent } from './volunteer-homepage.component';

describe('VolunteerHomepageComponent', () => {
  let component: VolunteerHomepageComponent;
  let fixture: ComponentFixture<VolunteerHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerHomepageComponent]
    });
    fixture = TestBed.createComponent(VolunteerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
