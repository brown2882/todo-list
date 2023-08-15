import {ADD_TODO, DELETE_TODO, GET_TODO} from "./todo.types";



export const getTodo = ( list ) => {
    return{
        type: GET_TODO,
        payload: list
    }
}


export const deleteTodo = ( ) => {
    return{
        type: DELETE_TODO
    }
}


export const addTodo = (list) => {
    return{
        type: ADD_TODO,
        payload: list
    }
}