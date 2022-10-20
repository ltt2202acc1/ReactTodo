import React, { useCallback, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { v4 } from "uuid";
import TodoList from "./components/TodoList";
export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);
  const onAddBtnClick = useCallback(
    (e) => {
      setTodoList([{ id: v4(), name: textInput }, ...todoList]);
      setTextInput("");
    },
    [textInput, todoList]
  );
  const onDeleteBtnClick = useCallback(
    (id) => {
      const newTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(newTodoList);
    },
    [todoList]
  );
  return (
    <div>
      <h1>Danh sách công việc </h1>
      <Box sx={{ display: "flex" }}>
        <TextField
          sx={{ mr: 1 }}
          size="small"
          fullWidth
          id="standard-basic"
          label="Thêm công việc"
          variant="outlined"
          value={textInput}
          onChange={onTextInputChange}
        />
        <Button
          variant="contained"
          onClick={onAddBtnClick}
          disabled={!textInput}
        >
          Thêm
        </Button>
      </Box>
      <TodoList
        todoList={todoList}
        onDeleteBtnClick={onDeleteBtnClick}
      ></TodoList>
    </div>
  );
}
