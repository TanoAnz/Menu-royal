import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card7',
  templateUrl: './card7.component.html',
  styleUrl: './card7.component.css'
})
export class Card2Component implements OnInit {
  link: any;
  constructor(public mainService: MainService, private route: ActivatedRoute){}
  ngOnInit(): void {
  }

}
