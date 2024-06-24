import { Component, Input, } from '@angular/core';
import { MainService } from '../service/main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrl: './card4.component.css'
})
export class Card4Component {
  @Input() isTrue!: number;
  @Input() i:any;
  isFrutture!: boolean;
  constructor(public mainService: MainService, private route: ActivatedRoute){
  }
  }
