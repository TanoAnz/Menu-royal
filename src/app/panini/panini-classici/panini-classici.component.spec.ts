import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaniniClassiciComponent } from './panini-classici.component';

describe('PaniniClassiciComponent', () => {
  let component: PaniniClassiciComponent;
  let fixture: ComponentFixture<PaniniClassiciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaniniClassiciComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaniniClassiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
