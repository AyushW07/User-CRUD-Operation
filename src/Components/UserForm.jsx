import React, { useContext, useState } from "react";
import "./UserForm.css";
import { UserContext } from "./UserContext";

const UserForm = ({ user }) => {
  const { dispatch } = useContext(UserContext);
  const [name, setName] = useState(user ? user.name : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      dispatch({
        type: "UPDATE_USER",
        payload: { id: user.id, name },
      });
    } else {
      dispatch({
        type: "ADD_USER",
        payload: { id: new Date().getTime(), name },
      });
    }
    setName("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
        />
        <button type="submit">{user ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default UserForm;
