import { createStore, combineReducers, applyMiddleware } from "redux";
import { Comments } from "./comments";
import { Dishes } from "./dishes";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
    const Store = createStore(
        combineReducers ({
            leaders: Leaders,
            comments: Comments,
            dishes: Dishes,
            promotions: Promotions
        }),
        // The applyMiddleware returns store enhancers that will be supplied to the application.
        applyMiddleware(thunk, logger)
    );
    return Store;
};