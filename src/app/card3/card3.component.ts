import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrl: './card3.component.css'
})
export class Card3Component implements OnInit{
  @Input() isTrue!: number;
  @Input() i:any;
  isFrutture!: boolean;
  constructor(public mainService: MainService, private route: ActivatedRoute){
  }
  ngOnInit(): void {
    if(this.isTrue === 1){
      this.isFrutture = true;
    } else {
      this.isFrutture = false;
    }
    }
  }

