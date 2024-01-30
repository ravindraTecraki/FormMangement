import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hospital_reg } from './hospital-re';
describe('Hospital_reg', () => {
  let component: Hospital_reg;
  let fixture: ComponentFixture<Hospital_reg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hospital_reg]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hospital_reg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
