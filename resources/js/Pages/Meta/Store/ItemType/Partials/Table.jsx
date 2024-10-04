import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { toast } from "react-toastify";
import { deleteItemType } from "@/Helpers/Api/ItemTypeApi";
import Pagination from "@/Components/Pagination";

function Table({ itemTypes, pagination, onPageChange, onDelete }) {
    

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this itemType?")) {
            deleteItemType(id);
            router.visit(route("itemTypes.index"));
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
                                    ItemType Name
                                </th>

                                <th className="bg-primary" scope="col">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {itemTypes.map((itemType) => (
                                <React.Fragment key={itemType.id}>
                                    <tr>
                                        <th scope="row">{itemType.id}</th>
                                        <td>{itemType.name}</td>

                                        <td>
                                            <Link
                                                href={`${route(
                                                    "itemTypes.show",
                                                    itemType.id
                                                )}`}
                                                className="btn btn-warning btn-sm ms-2"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-danger btn-sm ms-2"
                                                onClick={() =>
                                                    handleDelete(itemType.id)
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
