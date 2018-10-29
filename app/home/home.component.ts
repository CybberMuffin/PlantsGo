import {Component, OnInit} from '@angular/core';
import {Plant} from "~/interfaces/plant";
import {PlantsService} from "~/services/plants.service";
import {FirebaseService} from "~/services/firebase.service";

import firebase = require("nativescript-plugin-firebase");
require("nativescript-localstorage");
import {action, alert, confirm, prompt, login} from "tns-core-modules/ui/dialogs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit{
  title = 'PlantsGo';
  private plants;
  private myPlants;
  public cent;

  constructor(private plantsService: PlantsService,
              private firebaseService: FirebaseService) {
      this.plantsService.createStorage("plants");
  }

  ngOnInit(){
      this.getAll();
      this.myPlants = this.plantsService.list;

  }

  public getAll() {
      firebase.getValue("/plants")
          .then(result => {
              this.plants = result.value;
          })
          .catch(error => console.log("Error: " + error))
  }

    public confirmAdd(plant: Plant) {
        confirm({
            title: plant.name,
            message: "Add this plant to your list?",
            okButtonText: "YES",
            cancelButtonText: "NO"
        }).then((result) => {
            if(result){
                this.plantsService.addNew(plant);
            }
        });
    }
}
