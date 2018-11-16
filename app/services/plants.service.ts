import { Injectable } from '@angular/core';
import {Plant} from "~/interfaces/plant";
import {ObservableArray} from "tns-core-modules/data/observable-array";
import { NotificationService } from './notification.service';
let applicationSettings = require("tns-core-modules/application-settings");
require( "nativescript-localstorage" );

@Injectable({
  providedIn: 'root'
})
export class PlantsService {
    private _list: Plant[] = [];
    private storage: string;

  constructor(private notificationService: NotificationService) {
  }

  public createStorage(name: string){
      this.storage = name;
      //applicationSettings.clear();
      if(applicationSettings.hasKey(this.storage))
          this.get();
     // this.notificationService.createStorage(this.storage + "Notifications");
  }

  public save(){
      applicationSettings.setString(this.storage, JSON.stringify(this._list));
  }

  public get(){
      this._list = JSON.parse(applicationSettings.getString(this.storage));
  }

  public addNew(plant: Plant){
      if(!this.is_exists(plant)|| this._list.length == 0) {
          this._list.push(plant);
          this.save();
      }
  }

  public update(id: number, name: string, desc: string, pour: number){
      this.get();
      let objToUpdate = this._list.find((obj) => obj.id == id);
      objToUpdate.name = name == "" ? objToUpdate.name : name;
      objToUpdate.description = desc == "" ? objToUpdate.description : desc;
      objToUpdate.pour = pour < 0 ? objToUpdate.pour : pour;
      const bs = this._list.filter((obj) => obj.id != id);
      this._list = [...bs, objToUpdate];
      this.save();
  }

  public delete(plant: Plant){
      const bs = this._list.filter((obj) => obj != plant);
      this._list = bs; //[...bs];
      this.save();
  }

  private is_exists(plant): boolean{
      let objControl = this._list.find((obj) => obj.id == plant.id);
      return objControl != undefined;
  }

  get list(): Plant[] {
      return this._list;
  }

  set list(value: Plant[]) {
      this._list = value;
  }
}
