import React from "react";

const Todos = ({todos, handleDelete}) => {
    const todoList = todos.length > 0 ? (
        todos.map(todo => {
            return (
                <div onClick={() => {handleDelete(todo.id)}} className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">No todos left</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;