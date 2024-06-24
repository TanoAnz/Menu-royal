import { Component, Input } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() i:any;
  constructor(public mainService: MainService,){

  }
}
