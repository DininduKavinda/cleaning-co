import React from "react";
import { Link, router } from "@inertiajs/react";
import { deleteRole } from "@/Helpers/Api/RoleApi";

function Table({ roles }) {
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this role?")) {
            try {
                await deleteRole(id);
                router.visit(route("role_webs_webs.index"));
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
                                    <Link href={`${route(
                                                "roles.edit",
                                                role.id
                                            )}`} className="btn btn-primary btn-sm">
                                       Role Permission
                                    </Link>

                                        <Link
                                            href={`${route(
                                                "roles.show",
                                                role.id
                                            )}`}
                                            className="btn btn-warning btn-sm ms-2"
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
