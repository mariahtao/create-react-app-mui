import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "./components/AppBar";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import "./index.css";

function Copyright() {
  return (
    <Typography
      variant="body1"
      color="primary.light"
      align="start"
      paddingX={2}
      paddingY={4}
    >
      {"© Created with MUI by "}
      <Link color="secondary" href="https://mariahtao.dev/">
        @mariahtao.dev
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <AppBar />
        <AddTodo align="start" makeTodos={(text) => setTodos([...todos, text])} />
        {todos.map((todo, index) => {
          return <Todo todoNo={index} todo={todo} key={index} />;
        })}
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;