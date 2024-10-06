import React, { useState } from "react";

export default function TodoInput(props) {
    const { handleAppTodos , todoValue, setTodoValue } = props;

    return (
        <header>
            <input
                value={todoValue}
                onChange={(e) => {
                    setTodoValue(e.target.value);
                }}
                placeholder="Enter Todos..."
                type="text"
            />
            <button
                onClick={() => {
                    handleAppTodos(todoValue);
                    setTodoValue('')
                }}
            >
                Add
            </button>
        </header>
    );
}
