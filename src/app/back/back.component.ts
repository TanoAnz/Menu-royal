import { Component, Input } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrl: './back.component.css'
})
export class BackComponent {
  @Input( ) link: any;
  @Input() index: any;
  @Input() array: any;
  constructor(public mainService: MainService){

  }
}
