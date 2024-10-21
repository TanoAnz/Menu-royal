import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrl: './card2.component.css'
})
export class Card2Component implements OnInit {
  [x: string]: any;
  link: any;
  constructor(public mainService: MainService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
  }
  onCardClick(route: number): void {
    // Aggiungi un delay di 300ms prima di navigare
    setTimeout(() => {
      this.router.navigate([route]);
    }, 300);  // 300ms di ritardo per vedere l'animazione
  }

}