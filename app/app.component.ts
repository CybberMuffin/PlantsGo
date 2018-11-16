import { Component } from '@angular/core';
import firebase = require("nativescript-plugin-firebase");
import { LocalNotifications } from "nativescript-local-notifications";
import { Color } from 'tns-core-modules/color/color';

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
                                name="calendarTab"></page-router-outlet>
      </TabView>
  `
})
export class AppComponent {
  constructor(){
    firebase.init();
    //this.addOnReceivedCallBack();
    //this.notifications();
  }

}
