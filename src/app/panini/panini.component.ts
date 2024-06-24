import { Component } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-panini',
  templateUrl: './panini.component.html',
  styleUrl: './panini.component.css'
})
export class PaniniComponent {
  constructor(public mainService: MainService,){

  }
}