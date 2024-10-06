import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);
    const [todoValue, setTodoValue] = useState([]);
    const handleAppTodos = (newTodo) => {
        const newTodoList = [...todos, newTodo];
        persistData(newTodoList);
        setTodos(newTodoList);
    };

    function persistData(newList) {
        localStorage.setItem("todos", JSON.stringify({ todos: newList }));
    }

    const handleDeleteTodo = (index) => {
        const newTodoList = todos.filter((todo, todoIndex) => {
            return todoIndex != index;
        });
        persistData(newTodoList)
        setTodos(newTodoList);
    };
    const handleEditTodo = (index) => {
        const valueToBeEdited = todos[index];
        setTodoValue(valueToBeEdited);
        persistData(newTodoList)
        handleDeleteTodo(index);
    };

    useEffect(() => {
        if (!localStorage) {
            return;
        }

        let localTodos = localStorage.getItem("todos");
        if (!localTodos) {
            return;
        }

        console.log(localTodos);
        localTodos = JSON.parse(localTodos).todos;
        setTodos(localTodos);
    }, []);

    return (
        <>
            <TodoInput
                handleAppTodos={handleAppTodos}
                todoValue={todoValue}
                setTodoValue={setTodoValue}
            />
            <TodoList
                todos={todos}
                handleDeleteTodo={handleDeleteTodo}
                todoValue={todoValue}
                handleEditTodo={handleEditTodo}
            />
        </>
    );
}

export default App;
