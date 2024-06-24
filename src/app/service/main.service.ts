import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  MenuIniziale= {
    nomi: ['Antipasti', 'Panini/Piadine', 'Kebab', 'Bevande'],
    linkImg: ['pollo.png', 'burger.png', 'kebab.png','drink.png', ],
    linkMenu: ['Fritture', 'Panini', 'Kebab', 'Bevande'],
  }
  BevandeEPanini= ['Panini', 'Hamburger', 'Bevande', 'Birre'];
  Menu={
    Panini: {
      nomi: ['-Patatine Fritte',  '-Mozzarelline', '-Bocconcini di Pollo','-Anelli Di Cipolla', '-Bacon Chips', '-Misto Fritto', '-Alette',
        '1-Ragazzino', '2-Classico', '3-Rucola', '4-Salsiccia', '5-Pollo', '6-Top Chicken', '7-Mortadella',
        '14-Classic Burger', '15-Maccarrone', '16-Pistacchio Burger', '17-Ovetto', '18-Pollo', '19-Polpettoso', '20-Royal', '21-Angus',
        '8-Completo', '9-Kabalas', '10-Moderno', '11-Contemporaneo', '12-Vallo a Scambiare', '13-Al Piatto',
      ],
      desc: [ 'Piccole, Medie, Grandi.', 'Piccole, Medie, Grandi.', '10pz di Bocconcini di Pollo', '10pz di Anelli di Cipolla', 'Patatine, cheddar e bacon', 'Patatine fritte, mozzarelline, arancinette, olive, anelli di cipolla e panelle', 'Alette di pollo in salsa piccante (6pz)',
        'wurstel, patatine fritte, maionese e ketchup', 'wurstel, pomodoro, lattuga, maionese e ketchup', 'prosciutto crudo, pomodoro, mozzarella, rucola, scaglie di grana e salsa di aceto balsamico', 'salsiccia di maiale, pomodoro, lattuga, cipolla caramellata, salsa BBQ', 'cotoletta di pollo panato, pomodoro, lattuga, provola, maionese e patatine ', 'cotoletta di pollo panato, patatine, provola dolce e maionese', 'mortadella, mozzarella di bufala, crema di pistacchio e granella di pistacchio',
        'hamburger di maiale(100g), cheddar, bacon, pomodoro, lattuga, cipolla  caramellata, salsa BBQ e maionese', 'doppio hamburger di maiale(100g), cheddar, bacon, pomodoro, anelli di cipolla, rucola e salsa burger.', 'hamburger di maiale(100g), pomodoro ciliegino, burrata, crema di pistacchio e  granella di pistacchio.', 'hamburger di maiale(100g), provola, bacon, lattuga, uovo, cipolla caramellata e salsa BBQ', 'cotoletta di pollo panata, cheddar, pomodoro, lattuga, cipolla caramellata, salsa sweet chilli e mayo', 'polpettine fritte, provola, pomodoro ciliegino, cipolla caramellata e salsa burger', 'hamburger di scottona (200g), mozzarella di bufala, pomodoro ciliegino, rucola, salsa di aceto balsamico', 'hamburger di angus (200g), cheddar, bacon, pomodoro ciliegino, lattuga, cipolla caramellata, maionese, salsa BBQ',
        'kebab, lattuga, pomodoro, cipolla, cetrioli, mais, salsa yogurt e salsa ', 'kebab, crauti, cheddar, patatine fritte, salsa BBQ e salsa rosa', 'kebab, cheddar, cipolla, salsa yogurt e patatine fritte.', 'kebab, bacon, cheddar, patatine e salsa BBQ', 'kebab, crauti, cheddar, patatine fritte, salsa BBQ e salsa rosa', 'kebab',

      ],
      prezzo: ['2.00€,  3.00€,  4.00€',  '2.00€, 3.00€, 4.00€',  '4.00€', '4.00€', '5.00€', '2.00€', '5.00€',
        '2.50€', '3.00€', '4.00€', '4.00€', '5.00€', '4.50€', '5.00€',
        '7.00€', '9.00€','8.00€', '8.00€', '6.00€', '6.00€', '11.00€', '11.00€',
        '7.00€', '7.00€', '7.00€', '7.00€', '7.00€', '5.00€',
        
      ],
      supplementi:['-Vari +0,50€', '-Burrata +3.00€', '-Hamburger di scottona (200g) +4.00€', '-Hamburger di angus (200g) +4.00€', '-Doppio Hamburger (100g) +2.00€', '-Bacon +1.00€'],
      pane:['-Panino classico/rotondo', '-Pane', '-Panino di pasta dolce'],
      salsa:['-Barbecue', 'Salsa burger', '-Salsa al bacon affumicato', '-Salsa al bacon affumicato', '-Salsa yogurt', '-Senape', '-Boscaiola', '-Salse piccanti: Suocera, Harissa, Sweet Chilli', '-Salsa tartara', '-Salsa bernese', '-Salsa rosa', '-Salsa al mango']
    },
    bevande: {
      titoli:['Bevande', 'Birre', 'Birra alla Spina', 'Amari e Digestivi'],
      nomi:['Acqua naturale/frizzante(1 litro)', 'Coca-Cola (1,5l)', 'Coca-Cola / Zero (lattina)', 'Partannina', "THE' pesca/limone (lattina)", 'Lemon/Orange Soda', 'Succo di frutta(ananas, pesca, pera, ace)', 'Red Bull', 'Cocktail Sanpellegrino', 'Ginger-beer','Fever-tree tonica', 'Chinotto', 'Schweppes tonica/limone', 'Campari', 'Crodino',
        "Beck's 66cl", 'Birra dello Stretto 66cl',
        'Veltins bionda;', '-0.3', '-0.5',
        '-Averna', '-Amaro del capo', '-Vecchia romagna', '-Montenegro', '-Jagermeister', '-Baileys', '-Disaronno', '-Limoncello', '-Grappa 903', '-Grappa diciotto lune',
      ],
      prezzi:['2.00€', '3.50€', '2.00€', '2.00€', '2.50€', '2.00€', '2.00€', '3.00€', '2.00€', '2.50€', '2.50€', '2.00€', '2.00€', '3.00€', '3.00€',
        '5.00€', '5.00€',
        '', '3.00€', '5.00€',
        '2.50€', '2.50€', '2.50€', '2.50€', '2.50€', '2.50€', '2.50€', '2.50€', '2.50€', '4.50€'
      ]
    },
  }

  constructor() { }
}
