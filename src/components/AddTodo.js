import React, { useState } from "react";
import { FormControl, Box, Button, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";

const AddTodo = ({ makeTodos }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const createTodo = (e) => {
    e.preventDefault();
    setText("");
    makeTodos(text);
  };

  return (
    <div>
      <form onSubmit={createTodo}>
        <FormControl
          sx={{ flexDirection: "row", alignItems: "center", gap: 2, my: 4 }}
        >
          <TextField
            className="textfield"
            multiline
            inputProps={{ style: { color: "cyan" } }}
            label="Add task"
            variant="filled"
            onChange={handleChange}
            required={true}
            value={text}
          />
          <Button variant="contained" color="secondary">
            <Add />
            Add
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default AddTodo;
