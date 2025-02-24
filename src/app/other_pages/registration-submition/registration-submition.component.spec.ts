import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSubmitionComponent } from './registration-submition.component';

describe('RegistrationSubmitionComponent', () => {
  let component: RegistrationSubmitionComponent;
  let fixture: ComponentFixture<RegistrationSubmitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationSubmitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationSubmitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
