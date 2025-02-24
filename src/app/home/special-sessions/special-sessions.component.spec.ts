import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialSessionsComponent } from './special-sessions.component';

describe('SpecialSessionsComponent', () => {
  let component: SpecialSessionsComponent;
  let fixture: ComponentFixture<SpecialSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialSessionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
