import { useContext } from "react";
import { Context } from "../App";

const List = () => {
  const { users } = useContext(Context);

  return (
    <div>
      List of users:
      <ul>
        {users &&
          users.map((users) => (
            <li key={users.id}>
              {users.name}: and position - {users.position}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;
