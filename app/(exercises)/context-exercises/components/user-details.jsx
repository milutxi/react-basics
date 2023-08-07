"use client";
import React, { useContext } from "react";
import { UserContext } from "../context/user-context";

function UserDetail() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <h2>User Details</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No user selected.</p>
      )}
    </div>
  );
}

export default UserDetail;
