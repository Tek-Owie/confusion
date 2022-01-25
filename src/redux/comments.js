import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

// This is the comment's reducer function. 
// It receives the comments state and an action, and updates the state according to the action-type from the action creator.
// It is worth noting that reducers do not modify state, they must make immutable updates, 
// by copying the existing state and making changes to the copied values. Hence, the concat method at the end of the first case.
export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.concat(comment);

        default: 
            return state;
    }
};