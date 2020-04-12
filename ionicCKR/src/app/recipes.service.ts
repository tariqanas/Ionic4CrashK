import { Injectable } from '@angular/core';
import { recipes } from './recipes/recipes-model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes : recipes[] = [
    {
    id : '1',
    title:'spaghetti',
    image:'https://www.galbani.fr/wp-content/uploads/2019/12/AdobeStock_277063507-800x600.jpeg',
    ingredient:['spagethi','meat','tomatoes','salade','olives','sauce']
  },
  {
    id : '2',
    title:'BigMac',
    image:'https://ws.mcdonalds.fr/media/90/4f/c4/904fc4583cd3741c2947ca00a9ec3e5a80e85801',
    ingredient:['Bread','Salade','tomatoe','Meat','sauce','cheese']
  },
  {
    id : '3',
    title:'Ice Cream',
    image:'https://chocolatechocolateandmore.com/wp-content/uploads/2019/04/Easy-Chocolate-Ice-Cream-no-machine-from-ChocolateChocolateandmore-56-480x480.jpg',
    ingredient:['Ice','Cream','Strawberry','Chocolate']
  }];
  constructor() { }

  public getRecipies() {
    return this.recipes;
  }

  public getRecipie(recipId : string) {
   return  this.recipes.find(recip => {
      return recip.id === recipId;
    });
  }
}
