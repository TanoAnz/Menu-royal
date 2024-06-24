import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  aprilink(link:string){
    window.open(link, '_top');

  }
  constructor(){

  }

}
