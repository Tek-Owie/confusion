import { createStore, combineReducers } from "redux";
import { Comments } from "./comments";
import { Dishes } from "./dishes";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";

export const ConfigureStore = () => {
    const Store = createStore(
        combineReducers ({
            leaders: Leaders,
            comments: Comments,
            dishes: Dishes,
            promotions: Promotions
        })
    );
    return Store;
};