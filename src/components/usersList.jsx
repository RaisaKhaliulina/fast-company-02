import React, { useState, useEffect } from "react";
import api from "../api";
import Users from "../layouts/users";
import UserPage from "./userPage";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const UsersList = () => {
  const params = useParams();
  console.log("params.userId", params.userId);
  const [user, setUser] = useState(api.users.getById(params.userId));
  useEffect(() => {
    api.users.getById(params.userId).then((data) => setUser(data));
  }, []);

  const userId = user ? user._id : undefined;

  return <>{userId ? <UserPage user={user} /> : <Users />}</>;
};

UsersList.propTypes = {
  match: PropTypes.object
};

export default UsersList;
