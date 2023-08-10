import { Fragment, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import "./Form.css";
import Todo from "./Todo";
import EditForm from "./EditForm";

const Form = () => {
  const [title, setTitle] = useState("");

  const [todos, setTodos] = useState([]);

  const [editedTodo, seteditedTodo] = useState({});

  const [osEditing, setOsEditing] = useState(false);


  const handleCreateTodo = () => {
    //id, title, isDone

    const newTodo = {
      id: Date.now(),
      title: title,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    const newArr = todos.filter((el) => el.id !== id);
    setTodos(newArr);
  };
  const handleChangeStatus = (id) => {
    const newArr = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(newArr);
  };
  const handleUpdateTodo = (updtatedTodo) => {
    const newArr = todos.map((todo) =>
      todo.id === updtatedTodo.id
        ? updtatedTodo
        : todo
    );
    setTodos(newArr);
    setOsEditing(false);
  };
  const enterEditMode = (todo) => {
    seteditedTodo(todo);
    setOsEditing(true);
  };

  return (
    <Fragment>
      {osEditing && (
        <EditForm editedTodo={editedTodo} onSave={handleUpdateTodo} />
      )}
      <div className="form">
        <Input
          placeholder="Please type the task here"
          value={title}
          onChange={setTitle}
        />
        <Button text="Create TODO" onClick={handleCreateTodo} />
      </div>
      <div className="list">
        {todos.length > 0 &&
          todos.map((el) => (
            <Todo
              key={el.id}
              item={el}
              onDelete={handleDeleteTodo}
              onCheck={handleChangeStatus}
              onEdit={enterEditMode}
            />
          ))}
      </div>
    </Fragment>
  );
};

export default Form;
