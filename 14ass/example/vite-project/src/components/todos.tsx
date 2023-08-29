import { useState } from "react";
import { TodoInter } from "../types/todoType";
import Todo from "./todo";

export default function Todos() {
  const [todos, setTodos] = useState<TodoInter[]>([]);
  const [newTodo, setNewTodo] = useState("");
  return (
    <div>
      {todos.map((todoItem, index) => (
        <div key={index}>
          <Todo title={todoItem.title} isCompleted={todoItem.isCompleted} />
          <h3>
            {todoItem.title} - {todoItem.isCompleted ? "Completed" : "not complete"}
          </h3>
        </div>
      ))}
      <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
      <button
        onClick={() =>
          setTodos([...todos, { title: newTodo, isCompleted: false }])
        }
      >
        add todo
      </button>
      {[ <div>1</div> , <div>2</div>, <div>3</div>]}
    </div>
  );
}
