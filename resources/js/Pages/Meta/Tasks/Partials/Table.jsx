import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { toast } from "react-toastify";
import { deleteTask } from "@/Helpers/Api/TaskApi";
import Pagination from "@/Components/Pagination";
function Table({ tasks, pagination, onPageChange, onDelete }) {
    

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this task?")) {
            deleteTask(id);
            router.visit(route("tasks.index"));
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
                                    Task Name
                                </th>

                                <th className="bg-primary" scope="col">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {tasks.map((task) => (
                                <React.Fragment key={task.id}>
                                    <tr>
                                        <th scope="row">{task.id}</th>
                                        <td>{task.name}</td>

                                        <td>
                                            <Link
                                                href={`${route(
                                                    "tasks.show",
                                                    task.id
                                                )}`}
                                                className="btn btn-warning btn-sm ms-2"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-danger btn-sm ms-2"
                                                onClick={() =>
                                                    handleDelete(task.id)
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
