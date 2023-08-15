import {ADD_TODO, DELETE_TODO, GET_TODO} from "./todo.types";

const initialState = {
    todo: []
}


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_TODO:
            return {
                ...state,
                todo: action.payload
            }
        case DELETE_TODO:
            return {
                ...state,
                todo: []
            }
        case ADD_TODO:
            return {
                ...state,
                todo:action.payload
            }

        default:
            return state
    }


}