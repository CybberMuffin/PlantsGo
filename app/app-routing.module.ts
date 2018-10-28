import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {AllPlantsComponent} from "~/tabs/all-plants/all-plants.component";
import {FavoritePlantsComponent} from "~/tabs/favorite-plants/favorite-plants.component";

const routes: Routes = [
  { path: '', redirectTo: '/(allPlantsTab:allPlants//favoritesTab:favorites)', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'allPlants', component: AllPlantsComponent, outlet: 'allPlantsTab' },
  { path: 'favorites', component: FavoritePlantsComponent, outlet: 'favoritesTab' }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
