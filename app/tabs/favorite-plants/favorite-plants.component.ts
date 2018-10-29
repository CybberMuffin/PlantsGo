import { Component, OnInit } from '@angular/core';
import {PlantsService} from "~/services/plants.service";
import {Plant} from "~/interfaces/plant";
import {confirm} from "tns-core-modules/ui/dialogs";

@Component({
  selector: 'app-favorite-plants',
  templateUrl: './favorite-plants.component.html',
  styleUrls: ['./favorite-plants.component.css'],
  moduleId: module.id,
})
export class FavoritePlantsComponent implements OnInit {
  private favorites;
  constructor(private plantsService: PlantsService) {
      this.plantsService.createStorage("plants");
  }

  ngOnInit() {
    this.favorites = this.plantsService.list;
  }

  public confirmDelete(plant: Plant) {
      confirm({
          title: plant.name,
          message: "Are you sure that you want to delete this plant from your Favorites list?",
          okButtonText: "YES",
          cancelButtonText: "NO"
      }).then((result) => {
          if(result){
              this.plantsService.delete(plant);
              this.favorites = this.plantsService.list;
          }
      });
  }

}
