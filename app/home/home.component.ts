import {Component, OnInit} from '@angular/core';
import {Plant} from "~/plant";
import {PlantsService} from "~/plants.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit{
  title = 'PlantsGo';
  private counter = 42;
  private plants: Plant[];

  constructor(private plantsService: PlantsService) { }

  ngOnInit(){
    this.plants = this.plantsService.list;
  }

  public getMessage() {
    return this.counter > 0 ?
      `${this.counter} taps left` :
      'Hoorraaay! You unlocked the NativeScript clicker achievement!';
  }

  public onTap() {
    this.counter--;
  }
}
