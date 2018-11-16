import { Injectable } from '@angular/core';
import { Notification } from '~/interfaces/notification';
let applicationSettings = require("tns-core-modules/application-settings");

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _notifications: Notification[] = [];
  private storage: string;

  constructor() { }

  public createStorage(name: string){
    this.storage = name;
    if(applicationSettings.hasKey(this.storage))
        this.upload();
  }

  public save(){
    applicationSettings.setString(this.storage, JSON.stringify(this._notifications));
  }

  public upload(){
    this._notifications = JSON.parse(applicationSettings.getString(this.storage));
  } 

  public addNewNotification(notification: Notification){
    if(!this.is_exists(notification)|| this._notifications.length == 0) {
    this._notifications.push(notification);
    this.save();
    }
  }   

  private is_exists(notification): boolean{
    let objControl = this._notifications.find((obj) => obj.id == notification.id);
    return objControl != undefined;
}

  public delete(id: number){
    const bs = this._notifications.filter((obj) => obj.id != id);
    this._notifications = bs; 
    this.save();
}

  get notifications(): Notification[] {
    return this._notifications;
  }
}













