import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCallComponent } from './special-call.component';

describe('SpecialCallComponent', () => {
  let component: SpecialCallComponent;
  let fixture: ComponentFixture<SpecialCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialCallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
