import { Component, OnInit } from '@angular/core';
import { recipes } from './recipes-model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes : recipes[];
  
  constructor(private recipservice : RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipservice.getRecipies();
  }

}
