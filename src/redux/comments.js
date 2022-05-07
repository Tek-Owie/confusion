import * as ActionTypes from './ActionTypes';

// This is the comment's reducer function. 
// It receives the comments state and an action, and updates the state according to the action-type from the action creator.
// It is worth noting that reducers do not modify state, they must make immutable updates, 
// by copying the existing state and making changes to the copied values. Hence, the concat method at the end of the first case.
export const Comments = (state = {
    errmess: null,
    comments: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errmess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errmess: action.payload, comments: []};

        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            return {...state, comments: state.comments.concat(comment)};

        default: 
            return state;
    }
};