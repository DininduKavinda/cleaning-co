import React from "react";
import { Link, router } from "@inertiajs/react";

function Table({ permissions }) {
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this permission?")) {
            try {
                await axios.delete(
                    `http://127.0.0.1:8000/api/admin/permissions/${id}`
                );
                router.visit(route("permissions.index"));
            } catch (error) {
                console.error("Error deleting permission:", error);
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
                            {permissions.map((permission) => (
                                <tr key={permission.id}>
                                    <th scope="row">{permission.id}</th>
                                    <td>{permission.name}</td>
                                    <td>
                                        <Link
                                            href={`${route(
                                                "permissions.show",
                                                permission.id
                                            )}`}
                                            className="btn btn-warning btn-sm"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(permission.id)
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
