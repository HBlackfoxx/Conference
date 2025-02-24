import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizingChairsComponent } from './organizing-chairs.component';

describe('OrganizingChairsComponent', () => {
  let component: OrganizingChairsComponent;
  let fixture: ComponentFixture<OrganizingChairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizingChairsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizingChairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
