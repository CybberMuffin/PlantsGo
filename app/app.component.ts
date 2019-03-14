import { Component, OnInit, ApplicationRef } from '@angular/core';
import firebase = require("nativescript-plugin-firebase");
import { LocalNotifications } from "nativescript-local-notifications";
import { Color } from 'tns-core-modules/color/color';
import { NotificationService } from './services/notification.service';
import { Notification } from '~/interfaces/notification';
import { RouterExtensions } from "nativescript-angular";

@Component({
  selector: 'app-root',
  template: `
      <TabView androidSelectedTabHighlightColor="#56a3a6" tabBackgroundColor="#a4ed7d" class="background-g"
               selectedTabTextColor="#484538" androidTabsPosition="bottom">
            <page-router-outlet *tabItem="{title: 'Plants 🌵'}" 
                                name="allPlantsTab"></page-router-outlet>
            <page-router-outlet *tabItem="{title: 'Favorites 🍀'}" 
                                name="favoritesTab"></page-router-outlet>
            <page-router-outlet *tabItem="{title: 'Calendar 📆'}" 
                                name="calendarTab" (tap)="reload()"></page-router-outlet>
      </TabView>
  `
})
export class AppComponent implements OnInit {
   photos: string[] = ["https://firebasestorage.googleapis.com/v0/b/plantsgo-96a10.appspot.com/o/i0.jpg?alt=media&token=bc7101e1-c53a-40ed-9a28-32ad4d5c87e0",
  "https://firebasestorage.googleapis.com/v0/b/plantsgo-96a10.appspot.com/o/i1.jpg?alt=media&token=8c17063c-5c47-4d5e-99a1-a5cc3f70b903",
  "https://firebasestorage.googleapis.com/v0/b/plantsgo-96a10.appspot.com/o/i2.jpg?alt=media&token=fce8c39d-5438-4a38-b23a-ceade45d1203",
  "https://firebasestorage.googleapis.com/v0/b/plantsgo-96a10.appspot.com/o/i3.jpg?alt=media&token=bdda707f-97f3-4461-9a68-bb6983fd0719",
  "https://firebasestorage.googleapis.com/v0/b/plantsgo-96a10.appspot.com/o/i4.jpg?alt=media&token=b72bda9c-24f9-4779-b476-5a60ea9ad498"
  ];

  constructor(private notificationService: NotificationService) {
      firebase.init();
     
      this.notificationService.createStorage("plantsNotifications");  
      this.notificationSchelude();
  }

  ngOnInit(){
    LocalNotifications.addOnMessageReceivedCallback(not => {
        let renovate: Notification = this.notificationService.getNotificationById(not.id);
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
        console.log("labudabda");
      });
  }

  notificationSchelude(){
    for(let not of this.notificationService.notifications){
      this.notificationPopUp(not);
    }
  }

  notificationPopUp(notification: Notification) {
    let img = this.photos;
    LocalNotifications.hasPermission().then(
      function (granted) {
        if(granted === true) {
            LocalNotifications.schedule([{
                id: notification.id,
                title: '' + notification.plantName + ' is asking for water',
                body: 'Time to water your plant',
                icon: 'res://icon',
                image: img[notification.id],
                color: new Color(199, 17, 227, 10),
                badge: notification.id,
                thumbnail: true,
                interval: 'hour',
                at: new Date(notification.date),
                actions: [{id: notification.id.toString(), type: "button", title:"The plant is wattered", launch: false}]
            }]);    
      } else {
        console.log("Error");
      }
    });
  }

  callBackReceiver(){
    LocalNotifications.addOnMessageReceivedCallback(
      function (not) {
        let renovate: Notification = this.notificationService.getNotificationById(not.id);
        let now = new Date();
        this.notificationService.delete(renovate.id);
        this.notificationService.addNewNotification(
          {
            id: renovate.id,
            date: (new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 
            now.getMonth() + 1 > 4 && now.getMonth() + 1 < 10 ? 20 : 9).toDateString()),  
            plantName: renovate.plantName, 
            watering: renovate.watering
        });
        console.log("labudabda");
      }
      ).then(
          function() {
            console.log("Listener added");
          }
      );
  }

}
