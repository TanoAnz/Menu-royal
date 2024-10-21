import { Component, Input } from '@angular/core';
import { MainService } from '../service/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() i:any;
  constructor(public mainService: MainService, private router: Router){

  }
  onCardClick(route: string): void {
    // Aggiungi un delay di 300ms prima di navigare
    setTimeout(() => {
      this.router.navigate([route]);
    }, 500);
  }
}
