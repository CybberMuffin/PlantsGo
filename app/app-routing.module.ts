import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import {AllPlantsComponent} from "~/tabs/all-plants/all-plants.component";
import {FavoritePlantsComponent} from "~/tabs/favorite-plants/favorite-plants.component";
import {CalendarComponent} from "~/tabs/calendar/calendar.component";
import { PlantDetailsComponent } from './tabs/plant-details.component';
import { CustomPlantComponent } from './tabs/custom-plant/custom-plant.component';

const routes: Routes = [
  { path: '', redirectTo: '/(allPlantsTab:allPlants//favoritesTab:favorites//calendarTab:calendar)',
      pathMatch: 'full' },
  { path: 'allPlants', component: AllPlantsComponent, outlet: 'allPlantsTab' },
  { path: 'allPlants/:id', component: PlantDetailsComponent, outlet: 'allPlantsTab'},
  { path: 'favorites', component: FavoritePlantsComponent, outlet: 'favoritesTab' },
  { path: 'favorites/:id', component: PlantDetailsComponent, outlet: 'favoritesTab'},
  { path: 'calendar', component: CalendarComponent, outlet: 'calendarTab'},
  { path: 'favorites/addNew', component: CustomPlantComponent}
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
