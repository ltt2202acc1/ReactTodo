import React from "react";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Todo({ todo, onDeleteBtnClick }) {
  return (
    <div>
      <ListItem
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          py: 0,
          my: 1,
          borderRadius: "4px",
        }}
        size="small"
      >
        <ListItemText primary={todo.name} />
        <IconButton
          onClick={() => onDeleteBtnClick(todo.id)}
          edge="end"
          aria-label="delete"
          sx={{ color: "primary.contrastText" }}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </div>
  );
}
