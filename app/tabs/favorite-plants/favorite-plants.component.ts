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
import { CalendarComponent } from '../calendar/calendar.component';

//LocalNotifications.hasPermission();

@Component({
  selector: 'app-favorite-plants',
  templateUrl: './favorite-plants.component.html',
  styleUrls: ['./favorite-plants.component.css'],
  moduleId: module.id,
})
export class FavoritePlantsComponent implements OnInit {
  //private favorites: Observable<Plant[]>;
    title = "Favourite plants 🍀";
    private favorites;

  constructor(private plantsService: PlantsService,
    private notificationService : NotificationService,
     private store: Store<AppState>) {
      this.plantsService.createStorage("plants");
      //this.favorites = store.select('favor');
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
              this.notificationService.delete(plant.id);
              this.favorites = this.plantsService.list;
          }
      });
  }

}
