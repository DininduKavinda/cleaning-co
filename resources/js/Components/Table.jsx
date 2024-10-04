import React from "react";
import Pagination from "@/Components/Pagination";
import { Link, router } from "@inertiajs/react";

const getNestedValue = (obj, key) => {
    return key.split('.').reduce((o, i) => (o ? o[i] : null), obj);
};

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
                                        {columnData.map((column, index) => (
                                            <td key={index}>
                                                {getNestedValue(item, column)}
                                            </td>
                                        ))}
                                        
                                        <td width="10%">
                                            <Link
                                                href={`${route(actions.show, item.id)}`}
                                                className="btn ms-2"
                                            >
                                                <i className="fa-regular fa-pen-to-square"></i>
                                            </Link>
                                            <button
                                                className="btn ms-2"
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                <i className="fa-solid fa-trash"></i>
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