import { Injectable } from '@angular/core';
import firebase = require("nativescript-plugin-firebase");
import {Plant} from "~/interfaces/plant";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private arr: Plant[] = [];
  private path: string = '/plants';

  constructor() {
      /*firebase.init();*/
    /*  firebase.setValue(
          '/plants',
          [
              {id: 0, name: 'Rose', description: 'Very beautiful', pour: 1},
              {id: 1, name: 'Cactus', description: 'Very needle', pour: 7},
              {id: 2, name: 'Flower', description: 'Usual', pour: 2}
          ]
      );*/
  }

  public getAll(){
      firebase.getValue(this.path)
          .then(result => {
              this.arr = result.value;
          })
          .catch(error => console.log("Error: " + error));
  }

  public getIt() {
      return this.arr;
  }

  private setValue(arrayOfObjects: Array<Plant>) {
      firebase.setValue(
          this.path,
          arrayOfObjects
      );
  }
}
