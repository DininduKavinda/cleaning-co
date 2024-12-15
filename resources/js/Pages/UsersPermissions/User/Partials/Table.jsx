import React from "react";
import { Link, router } from "@inertiajs/react";
import { deleteUser } from "@/Helpers/Api/UserApi";
import Pagination from "@/Components/Pagination";
function Table({ users, pagination, onPageChange, permissions }) {
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await deleteUser(id);
                router.visit(route("user_webs.index"));
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        }
    };

    

    return (
        <div className="card overflow-hidden">
            <div className="card-header card-no-border">
                <div className="table-responsive signal-table">
                    <table className="table table-hover">
                        <thead className="table-primary">
                            <tr>
                                <th className="bg-primary" scope="col">
                                    Id
                                </th>
                                <th className="bg-primary" scope="col">
                                    Name
                                </th>
                                <th className="bg-primary" scope="col">
                                    Email
                                </th>
                                <th className="bg-primary" scope="col">
                                    Roles
                                </th>
                                <th className="bg-primary" scope="col">
                                    Last Login
                                </th>
                                <th className="bg-primary" scope="col">
                                    Active
                                </th>
                                {permissions["update user"] ? (
                                    <th className="bg-primary" scope="col">
                                        Action
                                    </th>
                                ) : null}
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.roles.length > 0
                                            ? user.roles.join(", ")
                                            : "No Roles"}
                                    </td>
                                    <td>{user.last_login || "Never"}</td>
                                    <td>
                                        {user.active ? "Active" : "Inactive"}
                                    </td>
                                    {permissions["update user"] ? (
                                        <td>
                                            <Link
                                                href={route(
                                                    "users.show",
                                                    user.id
                                                )}
                                                className="btn btn-warning btn-sm"
                                            >
                                                Edit
                                            </Link>

                                            {permissions["delete user"] ? (
                                                <button
                                                    onClick={() =>
                                                        handleDelete(user.id)
                                                    }
                                                    className="btn btn-danger btn-sm ms-2"
                                                >
                                                    Delete
                                                </button>
                                            ) : null}
                                        </td>
                                    ) : null}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    <Pagination
                        currentPage={pagination.currentPage}
                        lastPage={pagination.lastPage}
                        onPageChange={onPageChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default Table;
