import * as ActionTypes from './ActionTypes';

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