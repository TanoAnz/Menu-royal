import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrl: './foto.component.css'
})
export class FotoComponent implements OnInit{
  @Input() link: any; 
  constructor(){

  }
  ngOnInit(){}

}
