import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import './styles.scss';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',

        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'code',
            status: 'completed',
        },
        {
            id: 4,
            title: 'code',
            status: 'new',
        },
        {
            id: 5,
            title: 'code',
            status: 'completed',
        },
    ]

    const [todoList, setTodoList] = useState(initTodoList);
    const handleTodoClick = (todo, idx) => {
        //tao ra mang moi
        const newTodoList = [...todoList];
        console.log(todo, idx);
        //toggle state
        const newTodo = {
            ...todoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        newTodoList[idx] = newTodo;
        //update todo list
        setTodoList(newTodoList);
    }
    return (
        <div className='wrap'>
            <h2>TodoList</h2>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default TodoFeature;