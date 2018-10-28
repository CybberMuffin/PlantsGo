import { Component } from '@angular/core';
import firebase = require("nativescript-plugin-firebase");

@Component({
  selector: 'app-root',
  template: `
      <TabView androidSelectedTabHighlightColor="#454545" tabBackgroundColor="#38C172"
                      androidTabsPosition="bottom">
            <page-router-outlet *tabItem="{title: 'Plants'}" name="allPlantsTab"></page-router-outlet>
            <page-router-outlet *tabItem="{title: 'Favorites'}" name="favoritesTab"></page-router-outlet>
      </TabView>
  `
})
export class AppComponent {
  constructor(){
    firebase.init();
  }
}
