import { Component } from '@angular/core';
import { Recipe } from './model/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe('Banana Bread', 'This is my favorite bread', null, null, null),
      new Recipe('Pho', 'Pho here is so delicious', null, null, null),
      new Recipe('PadThai', 'They giftwrap it with eggs', null, null, null),
      new Recipe('Fried Rice', 'The rice is very fluffy', null, null, null),
    ];
  }
}
