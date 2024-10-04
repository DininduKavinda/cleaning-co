import React from "react";
import { Link, router } from "@inertiajs/react";
import { deleteLevel } from "@/Helpers/Api/LevelApi";
import Pagination from "@/Components/Pagination";

function Table({ levels, pagination, onPageChange, onDelete }) {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this level?")) {
            deleteLevel(id);
            router.visit(route("levels.index"));
        }
    };

    return (
        <div className="card overflow-hidden">
            <div className="card-header card-no-border">
                <div className="table-responsive signal-table">
                    <table className="table table-hover">
                        <thead className="table-primary">
                            <tr>
                                <th className="bg-primary" scope="col">Id</th>
                                <th width="50%" className="bg-primary" scope="col">Level Name</th>
                                <th className="bg-primary" scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {levels.map((level) => (
                                <React.Fragment key={level.id}>
                                    <tr>
                                        <th scope="row">{level.id}</th>
                                        <td>{level.name}</td>
                                        <td>
                                            <Link
                                                href={`${route("levels.show", level.id)}`}
                                                className="btn btn-warning btn-sm ms-2"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-danger btn-sm ms-2"
                                                onClick={() => handleDelete(level.id)}
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
