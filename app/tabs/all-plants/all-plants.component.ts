import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "~/services/firebase.service";
import {PlantsService} from "~/services/plants.service";
import firebase = require("nativescript-plugin-firebase");
import {Plant} from "~/interfaces/plant";
import {confirm} from "tns-core-modules/ui/dialogs";
import {Observable} from "rxjs/internal/Observable";
import {Store} from "@ngrx/store";
import {AppState} from "~/interfaces/state.interface";
import { NotificationService } from '~/services/notification.service';

@Component({
  selector: 'app-all-plants',
  templateUrl: './all-plants.component.html',
  styleUrls: ['./all-plants.component.css'],
  moduleId: module.id,
})
export class AllPlantsComponent implements OnInit {
    title = "All plants 🌵";
    public plants: Plant[] = [];
    constructor(private plantsService: PlantsService,
                private notificationService: NotificationService,
                private firebaseService: FirebaseService,
                private store: Store<AppState>) {
        this.getAll();
        // this.firebaseService.load().getArr()
        //     .subscribe((data) => {
        //         this.plants = data;
        //     });
    }


    ngOnInit() {
        console.log("What's the fuck?0");
        console.log(JSON.stringify(this.notificationService.notifications));
    }

    private getAll(){
        firebase.getValue("/plants")
            .then(result => {
                this.plants = result.value;
                localStorage.setItem("all", JSON.stringify(result.value));
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
                let now = new Date();
                this.plantsService.addNew(plant);
                this.notificationService.addNewNotification({date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + plant.pour, 
                    now.getMonth() + 1 > 4 && now.getMonth() + 1 < 10 ? 20 : 9), plantName: plant.name, watering: plant.pour});
            }
        });
    }

}
