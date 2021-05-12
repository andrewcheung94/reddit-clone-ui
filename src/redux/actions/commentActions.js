import { ADD_COMMENT } from './actionConstants';

export const addComment = (comment) => ({ type: ADD_COMMENT, payload: comment });