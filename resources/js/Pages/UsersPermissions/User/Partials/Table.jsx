import React from "react";
import { Link, router } from "@inertiajs/react";
import { deleteUser } from "@/Helpers/Api/UserApi";

function Table({ users, pagination, onPageChange, permissions }) {
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await deleteUser(id);
                router.visit(route("users.index"));
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        }
    };

    const renderPagination = () => {
        const pages = [];
        for (let i = 1; i <= pagination.lastPage; i++) {
            pages.push(
                <li
                    key={i}
                    className={`page-item ${
                        pagination.currentPage === i ? "active" : ""
                    }`}
                >
                    <a
                        href="javascript:void(0)"
                        className="page-link rounded-circle"
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </a>
                </li>
            );
        }

        return (
            <nav aria-label="Page navigation example  ">
                <ul className="pagination pagination-secondary gap-2 justify-content-center">
                    <li className="page-item">
                        <a
                            className="page-link rounded-circle"
                            href="javascript:void(0)"
                            aria-label="Previous"
                            onClick={() =>
                                onPageChange(pagination.currentPage - 1)
                            }
                            disabled={pagination.currentPage === 1}
                        >
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {pages}
                    <li className="page-item">
                        <a
                            className="page-link rounded-circle"
                            href="javascript:void(0)"
                            aria-label="Next"
                            onClick={() =>
                                onPageChange(pagination.currentPage + 1)
                            }
                            disabled={
                                pagination.currentPage === pagination.lastPage
                            }
                        >
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
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
                    {renderPagination()}
                </div>
            </div>
        </div>
    );
}

export default Table;
