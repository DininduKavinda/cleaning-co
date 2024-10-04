import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { toast } from "react-toastify";
import { deleteTimecardTask } from "@/Helpers/Api/TimecardTaskApi";
import Pagination from "@/Components/Pagination";
function Table({ timecardTasks, pagination, onPageChange, onDelete }) {
    

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this timecardTask?")) {
            deleteTimecardTask(id);
            router.visit(route("timecardTasks.index"));
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
                                    TimecardTask Name
                                </th>
                                <th className="bg-primary" scope="col">
                                    Task Rate
                                </th>
                                <th className="bg-primary" scope="col">
                                    Rate Type
                                </th>
                                <th className="bg-primary" scope="col">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {timecardTasks.map((timecardTask) => (
                                <React.Fragment key={timecardTask.id}>
                                    <tr>
                                        <th scope="row">{timecardTask.id}</th>
                                        <td>{timecardTask.name}</td>
                                        <td>{timecardTask.rate}</td>
                                        <td>{timecardTask.rate_type == 1 ? "Hourly" : "Daily"}</td>
                                        <td>
                                            <Link
                                                href={`${route(
                                                    "timecardTasks.show",
                                                    timecardTask.id
                                                )}`}
                                                className="btn btn-warning btn-sm ms-2"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-danger btn-sm ms-2"
                                                onClick={() =>
                                                    handleDelete(timecardTask.id)
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
