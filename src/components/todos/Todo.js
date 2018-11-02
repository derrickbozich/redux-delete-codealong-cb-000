import React from 'react'

const Todo = props => <li>{props.todo.text}</li><button onClick={() => props.delete(props.todo.id)}>Delete</button>

export default Todo;
