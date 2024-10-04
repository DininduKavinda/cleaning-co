import React from "react";
import Pagination from "@/Components/Pagination";
import { Link, router } from "@inertiajs/react";

function Table({ data, columns, columnData, actions, pagination, onPageChange, onDelete }) {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this item?")) {
            onDelete(id);
            router.visit(window.location.pathname); 
        }
    };

    return (
        <div className="card overflow-hidden">
            <div className="card-header card-no-border">
                <div className="table-responsive signal-table">
                    <table className="table table-hover">
                        <thead className="table-primary">
                            <tr>
                                {columns.map((column, index) => (
                                    <th key={index} className="bg-primary" scope="col">
                                        {column}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {data.map((item) => (
                                <React.Fragment key={item.id}>
                                    <tr>
                                        {columnData.map((key, index) => (
                                            <td key={index}>
                                                {item[key]} 
                                            </td>
                                        ))}

                                        <td width="10%">
                                            <Link
                                                href={`${route(actions.show, item.id)}`}
                                                className="btn ms-2"
                                            >
                                                <span className="text-primary">
                                                <i className="fa-regular fa-pen-to-square"></i>
                                                </span>
                                            </Link>
                                            <button
                                                className="btn ms-2"
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                <span className="text-danger">
                                                <i className="fa-solid fa-trash"></i></span>
                                            </button>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    {pagination && (
                        <Pagination
                            currentPage={pagination.currentPage}
                            lastPage={pagination.lastPage}
                            onPageChange={onPageChange}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Table;
