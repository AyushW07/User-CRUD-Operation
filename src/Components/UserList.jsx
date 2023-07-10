import React, { useContext } from "react";
import "./UserList.css";

import { UserContext } from "./UserContext";

const UserList = () => {
  const { state, dispatch } = useContext(UserContext);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  return (
    <ul>
      {state.users.map((user) => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
