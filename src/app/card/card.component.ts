import { Component, Input } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() i:any;
  constructor(public mainService: MainService,){

  }

}
