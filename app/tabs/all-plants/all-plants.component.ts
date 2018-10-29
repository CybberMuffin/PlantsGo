import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "~/services/firebase.service";
import {PlantsService} from "~/services/plants.service";
import firebase = require("nativescript-plugin-firebase");
import {Plant} from "~/interfaces/plant";
import {confirm} from "tns-core-modules/ui/dialogs";

@Component({
  selector: 'app-all-plants',
  templateUrl: './all-plants.component.html',
  styleUrls: ['./all-plants.component.css'],
  moduleId: module.id,
})
export class AllPlantsComponent implements OnInit {
    title = "All plants";
  private plants;
  constructor(private plantsService: PlantsService,
              private firebaseService: FirebaseService) {
      this.getAll();
  }


  ngOnInit() {
  }

  private getAll(){
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
