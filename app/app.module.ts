import { NgModule,  NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { AllPlantsComponent } from './tabs/all-plants/all-plants.component';
import { FavoritePlantsComponent } from './tabs/favorite-plants/favorite-plants.component';

import { StoreModule } from '@ngrx/store';
import { PlantsReducer } from './reducers/plants/plants.reducer';
import { CalendarComponent } from './tabs/calendar/calendar.component';


import { NativeScriptCommonModule } from "nativescript-angular/common";
//import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { PlantDetailsComponent } from './tabs/plant-details.component';
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      AllPlantsComponent,
      FavoritePlantsComponent,
      CalendarComponent,
      PlantDetailsComponent
  ],
  imports: [
      NativeScriptModule,
      AppRoutingModule,
      NativeScriptFormsModule,
      NativeScriptUICalendarModule,
      StoreModule.forRoot({
          plants: PlantsReducer
      })
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

