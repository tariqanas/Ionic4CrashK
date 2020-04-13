import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/recipes.service';
import { recipes } from '../recipes-model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecip : recipes;

  constructor(private activatedRoute : ActivatedRoute , private recipservice: RecipesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( loadedR => {
      if (!loadedR.has('recipId')) {
        return;
      }
      const idRecip = loadedR.get('recipId');
      this.loadedRecip = this.recipservice.getRecipie(idRecip); 
    });
  }

  deleteDetails() {
  this.recipservice.deleteRecip(this.loadedRecip.id);
  }

}
