import { AppState} from "~/interfaces/state.interface";
import * as PlantActions from "../../actions/plants/plants.actions";
import {Action} from "@ngrx/store";

const defaultState: AppState = {
    plants: []
};

export function PlantsReducer(state = defaultState, action: Action) {
    switch( action.type ) {

    }
}