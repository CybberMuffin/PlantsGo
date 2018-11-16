import { AppState} from "~/interfaces/state.interface";
import * as PlantActions from "../../actions/plants/plants.actions";
import { Action } from "@ngrx/store";
import {Plant} from "~/interfaces/plant";
import firebase = require("nativescript-plugin-firebase");

let pAll;
firebase.getValue("/plants")
    .then(result => {
        pAll = result.value;
    })
    .catch(error => console.log("Error: " + error));

const defaultState: AppState = {
    plants: [] = pAll
};


export function PlantsReducer(state = defaultState, action: PlantActions.Actions) {
    switch( action.type ) {
        case PlantActions.ADD_TO_FAV:
            return [state, action.payload];
        default:
            return state;
    }
}