import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallPapersComponent } from './call-papers.component';

describe('CallPapersComponent', () => {
  let component: CallPapersComponent;
  let fixture: ComponentFixture<CallPapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallPapersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
