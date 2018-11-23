import { Component } from '@angular/core';
import firebase = require("nativescript-plugin-firebase");
import { LocalNotifications } from "nativescript-local-notifications";
import { Color } from 'tns-core-modules/color/color';
import { NotificationService } from './services/notification.service';
import { Notification } from '~/interfaces/notification';
import {RouterExtensions} from "nativescript-angular";

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
export class AppComponent {
  constructor(private notificationService: NotificationService) {
      firebase.init();
     
      this.notificationService.createStorage("plantsNotifications");  
      console.log("one");
      console.log(JSON.stringify(this.notificationService.notifications));
      console.log("two");
      this.notificationPopTest();
      this.notificationSchelude();
      
      //this.addOnReceivedCallBack();
  }

  notificationSchelude(){
    for(let not of this.notificationService.notifications){
      this.notificationPopUp(not);
    }
  }

  notificationPopUp(notification: Notification) {
    LocalNotifications.hasPermission().then(
      function (granted) {
        if(granted === true) {
            LocalNotifications.schedule([{
                id: notification.id,
                title: '' + notification.plantName + ' is asking for water',
                body: 'Time to water your plant',
                icon: 'res://icon',
                image: '~/images/i'+notification.id+'.jpg',
                color:  new Color(199, 17, 227, 10),
                badge: notification.id,
                thumbnail: true,
                interval: 'hour',
                at: new Date(notification.date)
            }]);    
      } else {
        console.log("Error");
      }
    }
  );
  LocalNotifications.addOnMessageReceivedCallback(
    function (not) {
      let renovate: Notification = this.notificationService.getNotificationById(not.id);
      this.notificationService.delete(renovate.id);
      this.notificationService.addNewNotification(renovate);
    }
    ).then(
        function() {
          console.log("Listener added");
        }
    );
}

  notificationPopTest() {
      LocalNotifications.hasPermission().then(
        function (granted) {
          if(granted === true) {
              LocalNotifications.schedule([{
                  id: 0,
                  title: 'Water your flower',
                  body: 'Time to water your plant',
                  color:  new Color(199, 17, 227, 10),
                  badge: 0,
                  interval: 'hour',
                  at: new Date(new Date().getTime() + (10 * 1000))
              }]);    
        } else {
          console.log("Error");
        }
      }
    );
    LocalNotifications.addOnMessageReceivedCallback(
      function (not) {
        console.log("ID: " + not.id);
        console.log("Title: " + not.title);
        console.log("Body: " + not.body);
      }
      ).then(
          function() {
            console.log("Listener added");
          }
      );
  }
}
