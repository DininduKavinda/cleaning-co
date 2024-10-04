import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { toast } from "react-toastify";
import { deleteItem } from "@/Helpers/Api/ItemApi";

import Pagination from "@/Components/Pagination";

function Table({ items, pagination, onPageChange, onDelete }) {
   

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this item?")) {
            deleteItem(id);
            router.visit(route("items.index"));
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
                                    Item Type
                                </th>
                                <th className="bg-primary" scope="col">
                                    Item
                                </th>
                                <th className="bg-primary" scope="col">
                                    Status
                                </th>
                                <th className="bg-primary" scope="col">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {items.map((item) => (
                                <React.Fragment key={item.id}>
                                    <tr>
                                        <th scope="row">{item.id}</th>
                                        <td>
                                            <Link
                                                href={`${route(
                                                    "itemTypes.show",
                                                    item.item_type.id
                                                )}`}
                                            >
                                                {item.item_type.name}
                                            </Link>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.active ? 'Active' : 'Inactive'}</td>
                                        <td>
                                            <Link
                                                href={`${route(
                                                    "items.show",
                                                    item.id
                                                )}`}
                                                className="btn btn-warning btn-sm ms-2"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-danger btn-sm ms-2"
                                                onClick={() =>
                                                    handleDelete(item.id)
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
                    />  <Pagination
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
