import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCourseDetailsComponent } from './my-course-details.component';

describe('MyCourseDetailsComponent', () => {
  let component: MyCourseDetailsComponent;
  let fixture: ComponentFixture<MyCourseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCourseDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
