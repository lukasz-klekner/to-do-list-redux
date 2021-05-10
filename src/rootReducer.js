import { combineReducers } from 'redux';

import todosReducer from './features/todos/reducers';

const rootReducer = combineReducers({
todos: todosReducer
});

export default rootReducer;