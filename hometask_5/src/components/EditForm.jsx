import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const EditForm = (props) => {
  const { editedTodo, onSave } = props;
  const [updtedTitle, setUpdtedTitle] = useState(editedTodo.title);
  const handkeFormSubmit = (e) => {
    e.preventDefault();
    onSave({ ...editedTodo, title: updtedTitle });
  };

  return (
    <form onSubmit={handkeFormSubmit} className="editForm">
      <Input value={updtedTitle} onChange={setUpdtedTitle} />
      <Button text="Save" type="submit" onSubmit={handkeFormSubmit} />
    </form>
  );
};

export default EditForm;
