import types from './types';

const INITIAL_STATE = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' },
]

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }

const todosReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case types.TO_DO_ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.toDoText,
                    completed: false,
                }
            ]
        case types.TO_DO_TOGGLED:
            return state.map(toDoItem => {
                if(toDoItem.id !== action.toDoId){
                    return toDoItem;
                }
                // else {
                // toDoItem.completed = !toDoItem.completed;
                // return toDoItem
                // }

                return {
                    ...toDoItem,
                    completed: !toDoItem.completed
                }
            })
        case types.COLOR_SELECTED:
            return state.map(toDoItem => {
                if(toDoItem.id !== action.payload.toDoId) {
                    return toDoItem;
                }

                return {
                    ...toDoItem,
                    color: action.payload.color
                }
            })
        case types.TO_DO_DELETED:
            return state.filter(toDoItem => toDoItem.id !== action.toDoId)
        case types.ALL_COMPLETED:
            return state.map(toDoItem => ({
                ...toDoItem,
                completed: true
            }))
        case types.COMPLETED_CLEARED:
            return state.filter(({ completed }) => completed === false )
        default:
            return state;
    }
}

export default todosReducer;