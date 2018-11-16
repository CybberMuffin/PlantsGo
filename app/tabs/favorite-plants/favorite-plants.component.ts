import { Component, OnInit } from '@angular/core';
import {PlantsService} from "~/services/plants.service";
import {Plant} from "~/interfaces/plant";
import {confirm} from "tns-core-modules/ui/dialogs";
import {Observable} from "rxjs/internal/Observable";
import {Store} from "@ngrx/store";
import {AppState} from "~/interfaces/state.interface";
import { NotificationService } from '~/services/notification.service';
import { LocalNotifications } from "nativescript-local-notifications";
import { Color } from 'tns-core-modules/color/color';

//LocalNotifications.hasPermission();

@Component({
  selector: 'app-favorite-plants',
  templateUrl: './favorite-plants.component.html',
  styleUrls: ['./favorite-plants.component.css'],
  moduleId: module.id,
})
export class FavoritePlantsComponent implements OnInit {
  //private favorites: Observable<Plant[]>;
    title = "Favourite plants f🍀";
    private favorites;
    private notific;

  constructor(private plantsService: PlantsService,
    private not : NotificationService,
              private store: Store<AppState>) {
      //this.notifications();
      this.plantsService.createStorage("plants");
      this.not.createStorage("plantsNotifications");
      //this.favorites = store.select('favor');
  }

  ngOnInit() {
    this.favorites = this.plantsService.list;
    //this.notific = this.not.notifications;
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
