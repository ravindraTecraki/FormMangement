import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalloginComponent } from './hospitallogin.component';

describe('HospitalloginComponent', () => {
  let component: HospitalloginComponent;
  let fixture: ComponentFixture<HospitalloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospitalloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HospitalloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
