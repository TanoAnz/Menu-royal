import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaniniSfiziosiComponent } from './panini-sfiziosi.component';

describe('PaniniSfiziosiComponent', () => {
  let component: PaniniSfiziosiComponent;
  let fixture: ComponentFixture<PaniniSfiziosiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaniniSfiziosiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaniniSfiziosiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
