import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

// The action creator creates an Action-type object, hence the curly braces within the parenthesis
// It helps to dispatch the action-type initialized in the action types file
// The action creator takes in the required parameters for performing the adding comment. 
// Within the function body, payload carries the data that needs to be transferred to the reducer function.
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

/*This is a thunk. Thunks return functions. 
The returned function does two things: implements a 2000ms delay 
before setting the state of dishes to DISHES. While it delays, 
the dishes loading will be set to true.*/

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES))
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});