import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  name:string;
  calories: number;
  image: string;
  quantity: number;
  newFood: Object = {};
  todayFoods:Array<any> = [];
  sumCalories = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  isFormEnabled: boolean = false;
    toggleForm() {
     this.isFormEnabled = !this.isFormEnabled;
  }

  createFood(){
     this.foods.push(this.newFood);
     this.newFood = {};
     this.toggleForm()
  }

  addTodayList(food, calories){
    this.todayFoods.push(food);
    this.sumCalories += (food.calories)
  }

}
