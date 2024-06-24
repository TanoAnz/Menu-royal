import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalcoliciComponent } from './analcolici/analcolici.component';
import { BackComponent } from './back/back.component';
import { BevandeComponent } from './bevande/bevande.component';
import { CardComponent } from './card/card.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';
import { Card6Component } from './card6/card6.component';
import { CarneComponent } from './carne/carne.component';
import { DrinkComponent } from './drink/drink.component';
import { FooterComponent } from './footer/footer.component';
import { FotoComponent } from './foto/foto.component';
import { FrittureComponent } from './fritture/fritture.component';
import { HomeComponent } from './home/home.component';
import { KebabComponent } from './kebab/kebab.component';
import { PaniniComponent } from './panini/panini.component';
import { PaniniClassiciComponent } from './panini/panini-classici/panini-classici.component';
import { PaniniSfiziosiComponent } from './panini/panini-sfiziosi/panini-sfiziosi.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalcoliciComponent,
    BackComponent,
    BevandeComponent,
    CardComponent,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component,
    Card6Component,
    CarneComponent,
    DrinkComponent,
    FooterComponent,
    FotoComponent,
    FrittureComponent,
    HomeComponent,
    KebabComponent,
    PaniniComponent,
    PaniniClassiciComponent,
    PaniniSfiziosiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
