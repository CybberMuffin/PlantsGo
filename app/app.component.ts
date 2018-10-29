import { Component } from '@angular/core';
import firebase = require("nativescript-plugin-firebase");

@Component({
  selector: 'app-root',
  template: `
      <TabView androidSelectedTabHighlightColor="#56a3a6" tabBackgroundColor="#a4ed7d" class="background-g"
               selectedTabTextColor="#484538" androidTabsPosition="bottom">
            <page-router-outlet *tabItem="{title: 'Plants', iconSource: '~/images/plant.png'}" 
                                name="allPlantsTab"></page-router-outlet>
            <page-router-outlet *tabItem="{title: 'Favorites', iconSource: '~/images/flower.png'}" 
                                name="favoritesTab"></page-router-outlet>
      </TabView>
  `
})
export class AppComponent {
  constructor(){
    firebase.init();
  }
}
