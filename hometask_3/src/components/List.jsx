import { React, useEffect, useState } from "react";

const List = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setError("");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        if (!response.ok) {
          throw new Error("Щось поломали при FETCH");
        }
        const data = await response.json();
        setItems(data);
      } catch (e) {
        setError(e.message);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {error && <h3>{error}</h3>}
      {items && <h1>Полученный список: </h1>}
      <ol>{items && items.map((el) => <li key={el.id}>{el.title}</li>)}</ol>
    </div>
  );
};

export default List;
