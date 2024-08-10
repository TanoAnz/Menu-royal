import { Component } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-drink-enauden',
  templateUrl: './drink-enauden.component.html',
  styleUrl: './drink-enauden.component.css'
})
export class DrinkEnaudenComponent {
constructor(public mainService: MainService){}
}
