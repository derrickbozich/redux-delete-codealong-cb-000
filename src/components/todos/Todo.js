import React from 'react'

const Todo = props => <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>Delete</button>

export default Todo;
