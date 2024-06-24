import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrl: './card2.component.css'
})
export class Card2Component implements OnInit {
  link: any;
  constructor(public mainService: MainService, private route: ActivatedRoute){}
  ngOnInit(): void {
  }

}