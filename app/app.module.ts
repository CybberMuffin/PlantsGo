import { NgModule,  NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { AllPlantsComponent } from './tabs/all-plants/all-plants.component';
import { FavoritePlantsComponent } from './tabs/favorite-plants/favorite-plants.component';

import { StoreModule } from '@ngrx/store';

import { CalendarComponent } from './tabs/calendar/calendar.component';

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { PlantDetailsComponent } from './tabs/plant-details.component';
import { CustomPlantComponent } from './tabs/custom-plant/custom-plant.component';


@NgModule({
  declarations: [
      AppComponent,
      AllPlantsComponent,
      FavoritePlantsComponent,
      CalendarComponent,
      PlantDetailsComponent,
      CustomPlantComponent
  ],
  imports: [
      NativeScriptModule,
      AppRoutingModule,
      NativeScriptFormsModule,
      NativeScriptUICalendarModule
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

