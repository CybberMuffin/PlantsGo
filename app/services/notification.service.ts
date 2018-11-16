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
    //applicationSettings.clear();
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
    this._notifications.push(notification);
    this.save();
  }   

  get notifications(): Notification[] {
    return this._notifications;
  }
   /*this._list.push({date: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 
    now.getMonth() + 1 > 4 && now.getMonth() + 1 < 10 ? 20 : 9),
    plant: plant});*/
}













