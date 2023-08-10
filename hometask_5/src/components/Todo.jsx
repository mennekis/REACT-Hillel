import { React } from "react";
import Button from "./Button";
import Input from "./Input";

const Todo = (props) => {
  const { item, onDelete, onCheck, onEdit } = props;

  const handleDeleteTodo = () => {
    onDelete(item.id);
  };
  const handleChangeStatus = () => {
    onCheck(item.id);
  };
  const handleEditTodo = () => {
    onEdit(item);
  };

  return (
    <div className="todo-item" data-isDone={item.isDone}>
      <Input
        type="checkbox"
        onChange={handleChangeStatus}
        checked={item.isDone}
      />
      <h3 className="{}">{item.title}</h3>

      <div className="buttons" >
        <Button text="delete" onClick={handleDeleteTodo} />
        <Button text="edit" onClick={handleEditTodo} />
      </div>
    </div>
  );
};

export default Todo;
