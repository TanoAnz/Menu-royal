import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBevandeComponent } from './card-bevande.component';

describe('CardBevandeComponent', () => {
  let component: CardBevandeComponent;
  let fixture: ComponentFixture<CardBevandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardBevandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBevandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
