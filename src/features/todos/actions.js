import types from './types';

const addTask = toDoText => ({
    type: types.TO_DO_ADDED,
    toDoText,
})

const toggleTask = toDoId => ({
    type: types.TO_DO_TOGGLED,
    toDoId,
})

const selectColor = (toDoId, color) => ({
    type: types.COLOR_SELECTED,
    payload: {
        toDoId,
        color,
    }
})

const deleteTask = toDoId => ({
    type: types.TO_DO_DELETED,
    toDoId,
})

const completeAllTask = () => ({
    type: types.ALL_COMPLETED,
})

const clearCompletedTask = () => ({
    type: types.COMPLETED_CLEARED,
})

export default {
    addTask,
    toggleTask,
    selectColor,
    deleteTask,
    completeAllTask,
    clearCompletedTask,
}