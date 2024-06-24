import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalcoliciComponent } from './analcolici.component';

describe('AnalcoliciComponent', () => {
  let component: AnalcoliciComponent;
  let fixture: ComponentFixture<AnalcoliciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalcoliciComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalcoliciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
