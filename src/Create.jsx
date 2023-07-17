import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Create = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`https://corsproxy.io/?https://usercrudapi.foodyfly.buzz/api/users`);
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.post(`https://corsproxy.io/?https://usercrudapi.foodyfly.buzz/api/users-delete/${id}`);
    loadUsers();
  };


  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <div className="py-4">
          <td> <Link class="btn btn-primary mr-2" to="/users/add">
                    Add User
                  </Link></td>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                 
                  <Link class="btn btn-primary mr-2" to={`/users/read/${user.id}`}>
                    Read
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Create;