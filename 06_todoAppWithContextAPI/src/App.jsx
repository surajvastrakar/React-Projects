import "./App.css";
import { TodoProvider } from "./contexts/TodoContext";
import { useState, useEffect } from "react";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo) return;

    setTodos((prev) => [
      { id: Date.now(), todo: todo, completed: false },
      ...prev,
    ]);
  };

  const updateTodo = (id, todo) => {
    if (!id) return;

    setTodos((prev) =>
      prev.map((todoObj) => (todoObj.id == id ? todo : todoObj))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todoObj) =>
        todoObj.id == id
          ? { ...todoObj, completed: !todoObj.completed }
          : todoObj
      )
    );
  };

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todo"));
    if (todoList && todoList.length > 0) {
      setTodos(todoList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{<TodoForm />}</div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
          {todos.length == 0 && <p className="text-center">No Todo Present</p>}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
