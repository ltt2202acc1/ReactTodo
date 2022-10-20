import React from "react";
import Todo from "./Todo";
export default function ToDoList({ todoList, onDeleteBtnClick }) {
  return (
    <div>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} onDeleteBtnClick={onDeleteBtnClick} />
      ))}
    </div>
  );
}
