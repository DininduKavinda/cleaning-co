
import React from "react";

function UserTable({ users }) {
    return (
        <div className="table-responsive signal-table">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Roles</th>
                        <th scope="col">Last Login</th>
                        <th scope="col">Active</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.roles.length > 0 ? user.roles.join(", ") : "No Roles"}</td>
                            <td>{user.last_login || "Never"}</td>
                            <td>{user.active ? "Inactive" : "Active"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;
