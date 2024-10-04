import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { toast } from "react-toastify";
import { deleteDepartment } from "@/Helpers/Api/DepartmentApi";
import Pagination from "@/Components/Pagination";

function Table({ departments, pagination, onPageChange, onDelete }) {
    

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this department?")) {
            deleteDepartment(id);
            router.visit(route("departments.index"));
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
                                    Department Name
                                </th>

                                <th className="bg-primary" scope="col">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {departments.map((department) => (
                                <React.Fragment key={department.id}>
                                    <tr>
                                        <th scope="row">{department.id}</th>
                                        <td>{department.name}</td>

                                        <td>
                                            <Link
                                                href={`${route(
                                                    "departments.show",
                                                    department.id
                                                )}`}
                                                className="btn btn-warning btn-sm ms-2"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-danger btn-sm ms-2"
                                                onClick={() =>
                                                    handleDelete(department.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </React.Fragment>
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
