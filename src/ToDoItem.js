import { useDispatch } from 'react-redux';

import actions from './features/todos/actions';

const ToDoItem = ({ text , id}) => {

    const dispatch = useDispatch();

    const selectDone = () => {
        dispatch(actions.toggleTask(id))
    }

    const deleteTask = () => {
        dispatch(actions.deleteTask(id));
    }

    return (
        <li>
            {text}
            <button onClick={selectDone}>Done</button>
            <button onClick={deleteTask}>Delete</button>
        </li>
    )
}

export default ToDoItem;