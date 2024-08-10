import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaniniComponent } from './panini/panini.component';
import { HomeComponent } from './home/home.component';
import { PaniniClassiciComponent } from './panini/panini-classici/panini-classici.component';
import { Card2Component } from './card2/card2.component';
import { PaniniSfiziosiComponent } from './panini/panini-sfiziosi/panini-sfiziosi.component';
import { FrittureComponent } from './fritture/fritture.component';
import { KebabComponent } from './kebab/kebab.component';
import { CarneComponent } from './carne/carne.component';
import { BevandeComponent } from './bevande/bevande.component';
import { AnalcoliciComponent } from './analcolici/analcolici.component';
import { DrinkComponent } from './drink/drink.component';
import { Card6Component } from './card6/card6.component';
import { CardBevandeComponent } from './card-bevande/card-bevande.component';
import { DrinkEnaudenComponent } from './drink-enauden/drink-enauden.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'Panini', component: PaniniComponent, children:[
    {path: '', component: Card2Component},
    {path: '0', component: PaniniClassiciComponent},
    {path: '1', component: PaniniSfiziosiComponent},
  ]},
  {path:'Fritture', component: FrittureComponent},
  {path:'Kebab', component: KebabComponent},
  {path:'Carne', component: CarneComponent},
  {path:'Bevande', component: BevandeComponent, children:[
    {path: '', component: CardBevandeComponent},
    {path: '2', component: AnalcoliciComponent},
    {path: '3', component: DrinkComponent},
    {path: '4', component: Card6Component}
  ]}, 
  {path:'Drink', component: DrinkEnaudenComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }