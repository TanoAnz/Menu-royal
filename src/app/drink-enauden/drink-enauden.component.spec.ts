import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkEnaudenComponent } from './drink-enauden.component';

describe('DrinkEnaudenComponent', () => {
  let component: DrinkEnaudenComponent;
  let fixture: ComponentFixture<DrinkEnaudenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrinkEnaudenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrinkEnaudenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
