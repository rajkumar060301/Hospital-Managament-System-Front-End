import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorloginportalComponent } from './doctorloginportal.component';

describe('DoctorloginportalComponent', () => {
  let component: DoctorloginportalComponent;
  let fixture: ComponentFixture<DoctorloginportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorloginportalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorloginportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
