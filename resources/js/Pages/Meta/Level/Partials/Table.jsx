import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { toast } from "react-toastify";
import { deleteLevel } from "@/Helpers/Api/LevelApi";

function Table({ levels, pagination, onPageChange, onDelete }) {
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
            <nav aria-label="Page navigation example">
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
                                <th className="bg-primary" scope="col">
                                    Id
                                </th>
                                <th className="bg-primary" scope="col">
                                    Level Name
                                </th>

                                <th className="bg-primary" scope="col">
                                    Actions
                                </th>
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
                                                href={`${route(
                                                    "levels.show",
                                                    level.id
                                                )}`}
                                                className="btn btn-warning btn-sm ms-2"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-danger btn-sm ms-2"
                                                onClick={() =>
                                                    handleDelete(level.id)
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
                    {renderPagination()}
                </div>
            </div>
        </div>
    );
}

export default Table;