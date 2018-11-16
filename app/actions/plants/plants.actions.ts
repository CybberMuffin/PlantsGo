import {Action, ActionReducer} from "@ngrx/store";
import {Plant} from "~/interfaces/plant";

export const GET_ALL_PLANTS = '[PLANT] Get all plants';
export const GET_FAV_PLANTS = '[PLANT] Get favourite plants';
export const ADD_TO_FAV = '[PLANT] Add to favourites';
export const DELETE_FROM_FAV = '[PLANT] Delete from favourites';

export class GetAllPlantsAction implements Action {
    readonly type = GET_ALL_PLANTS;

    constructor(public payload: Plant) {}
}

export class GetFavoritesPlantsAction implements Action {
    readonly type = GET_FAV_PLANTS;

    constructor(public payload: Plant) {}
}

export class AddToFavorites implements Action {
    readonly type = ADD_TO_FAV;

    constructor(public payload: Plant) {}
}

export class DeleteFromFavorites implements Action {
    readonly type = DELETE_FROM_FAV;

    constructor(public payload: Plant) {}
}

export type Actions = GetAllPlantsAction | GetFavoritesPlantsAction
    | AddToFavorites | DeleteFromFavorites

