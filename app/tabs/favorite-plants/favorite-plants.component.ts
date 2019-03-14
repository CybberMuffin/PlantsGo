import { Component, OnInit } from '@angular/core';
import {PlantsService} from "~/services/plants.service";
import {Plant} from "~/interfaces/plant";
import {confirm} from "tns-core-modules/ui/dialogs";
import { NotificationService } from '~/services/notification.service';
import {RouterExtensions} from "nativescript-angular";
import { Notification } from '~/interfaces/notification';


@Component({
  selector: 'app-favorite-plants',
  templateUrl: './favorite-plants.component.html',
  styleUrls: ['./favorite-plants.component.css'],
  moduleId: module.id,
})
export class FavoritePlantsComponent implements OnInit {
    title = "Favourite plants 🍀";
    private favorites;

  constructor(private plantsService: PlantsService,
    private notificationService : NotificationService, private router: RouterExtensions) {
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
              this.notificationService.delete(plant.id);
              this.favorites = this.plantsService.list;
              
          }
      });
  }

  public waterPlant(plant: Plant) {
    confirm({
      title: plant.name,
      message: "Are you sure that you just have watered this plant ?",
      okButtonText: "YES",
      cancelButtonText: "NO"
  }).then((result) => {
      if(result){
        let renovate: Notification = this.notificationService.getNotificationById(plant.id);
        let now = new Date();
        this.notificationService.delete(renovate.id);
        this.notificationService.addNewNotification(
          {
            id: renovate.id,
            date: (new Date(now.getFullYear(), now.getMonth(), now.getDate() + renovate.watering, 
            now.getMonth() + 1 > 4 && now.getMonth() + 1 < 10 ? 20 : 9).toDateString()), //new Date(new Date(renovate.date).getDate() + this.plantsService.getPlantById(renovate.id).pour) , 
            plantName: renovate.plantName, 
            watering: renovate.watering
         });
        //this.notificationService.addNewNotification(renovate);
      }
  });
  }

  public goAdd(){
    this.router.navigateByUrl('/favorites/addNew');
  }
  
}
