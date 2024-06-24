import { Component, Input } from '@angular/core';
import { MainService } from '../service/main.service';
@Component({
  selector: 'app-card5',
  templateUrl: './card5.component.html',
  styleUrl: './card5.component.css'
})
export class Card5Component {
@Input() index: any;
@Input() array: any;
constructor(public mainService: MainService){}
}
