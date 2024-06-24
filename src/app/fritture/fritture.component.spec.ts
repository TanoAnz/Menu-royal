import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrittureComponent } from './fritture.component';

describe('FrittureComponent', () => {
  let component: FrittureComponent;
  let fixture: ComponentFixture<FrittureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrittureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrittureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
