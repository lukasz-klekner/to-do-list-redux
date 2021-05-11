import { useSelector } from 'react-redux';

import ToDoItem from './ToDoItem';

const ToDoList = () => {
    const todos = useSelector(state => state.todos);
    const tasks = todos.map(todo => <ToDoItem key={todo.id} {...todo} />)

    return (
        <ul>
            {tasks}
        </ul>
    )
}

export default ToDoList;