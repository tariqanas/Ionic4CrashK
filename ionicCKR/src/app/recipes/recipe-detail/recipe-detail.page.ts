import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { RecipesService } from 'src/app/recipes.service';
import { recipes } from '../recipes-model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecip : recipes;

  constructor(private activatedRoute : ActivatedRoute , 
    private recipservice: RecipesService , 
    private route:Router,
    private alertC:AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( loadedR => {
      if (!loadedR.has('recipId')) {
        this.route.navigate(['/recipes']);
      }
      const idRecip = loadedR.get('recipId');
      this.loadedRecip = this.recipservice.getRecipie(idRecip); 
    });
  }

  deleteDetails() {
  this.alertC.create({header:'Going to delete ' + this.loadedRecip.title ,
  message:'Are you sure that you want to delete the recipe ?',
  buttons: [
    {
      text:'Cancel',
      role:'cancel'
    },
    {
      text: 'Delete',
      handler : () => {
        this.recipservice.deleteRecip(this.loadedRecip.id);
        this.route.navigate(['/recipes']);
      }
    }
  ]
  })
  .then(al => al.present())
  }

}
