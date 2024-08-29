import React from "react";
import { Link, router } from "@inertiajs/react";

function Table({ roles }) {
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this role?")) {
            try {
                await axios.delete(
                    `http://127.0.0.1:8000/api/admin/roles/${id}`
                );
                router.visit(route("roles.index"));
            } catch (error) {
                console.error("Error deleting role:", error);
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
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {roles.map((role) => (
                                <tr key={role.id}>
                                    <th scope="row">{role.id}</th>
                                    <td>{role.name}</td>

                                    <td>
                                        <Link
                                            href={`${route(
                                                "roles.show",
                                                role.id
                                            )}`}
                                            className="btn btn-warning btn-sm"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(role.id)
                                            }
                                            className="btn btn-danger btn-sm ms-2"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Table;
