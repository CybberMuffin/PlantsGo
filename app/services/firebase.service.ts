import { Injectable } from '@angular/core';
import firebase = require("nativescript-plugin-firebase");
import {Plant} from "~/interfaces/plant";
import {Observable} from "rxjs/internal/Observable";
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    private arr: Plant[] = [];
    private path: string = '/plants';

    constructor() {
    }

    public load(){
        firebase.getValue(this.path)
            .then(result => {
                this.arr = result.value;
            })
            .catch(error => console.log("Error: " + error));
        return this;
        //return this.arr.length === 0 ? [] : this.arr;
    }

    public getAll() {
        return this.arr;
    }

    public getPlant(id: number): Plant {
        return this.arr.filter(plant => plant.id === id)[0];
    }

    private setValue(arrayOfObjects: Array<Plant>) {
        firebase.setValue(
            this.path,
            arrayOfObjects
        );
    }

    getArr(): Observable<any> {
        return new Observable((observer: any) => {
            observer.next(this.arr).share();
        });
        //return this.arr.map((response: Response) => response.json());
    }
}
