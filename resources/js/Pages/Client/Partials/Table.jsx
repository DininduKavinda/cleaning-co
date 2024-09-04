import React from "react";
import { Link, router } from "@inertiajs/react";
import { deleteClient } from "@/Helpers/Api/ClientApi";

function Table({ clients, pagination, onPageChange }) {
    const handleDelete = async (id) => {
        if (         window.confirm("Are you sure you want to delete this client?")) {
            try {
                await deleteClient(id);
                router.visit(route("clients.index"));
            } catch (error) {
                console.error("Error deleting client:", error);
            }
        }
    };

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
            <nav aria-label="Page navigation example  ">
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
                                    Email
                                </th>
                                <th className="bg-primary" scope="col">
                                    Roles
                                </th>
                                <th className="bg-primary" scope="col">
                                    Country
                                </th>
                                <th className="bg-primary" scope="col">
                                    Province
                                </th>
                                <th className="bg-primary" scope="col">
                                    District
                                </th>
                                <th className="bg-primary" scope="col">
                                    City
                                </th>
                                <th className="bg-primary" scope="col">
                                    Roles
                                </th>
                                <th className="bg-primary" scope="col">
                                    Last Login
                                </th>
                                <th className="bg-primary" scope="col">
                                    Active
                                </th>
                                <th className="bg-primary" scope="col">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {clients.map((client) => (
                                <tr key={client.id}>
                                    <th scope="row">{client.id}</th>
                                    <td>{client.full_name}</td>
                                    <td>{client.nic}</td>
                                    <td>
                                        {client.roles.length > 0
                                            ? client.roles.join(", ")
                                            : "No Roles"}
                                    </td>
                                    <td>{client.email}</td>
                                    <td>{client.country.country_name}</td>
                                    <td>{client.province.name_en}</td>
                                    <td>{client.district.name_en}</td>
                                    <td>{client.city.name_en}</td>
                                    <td>{client.last_login || "Never"}</td>
                                    <td>
                                        {client.active ? "Active" : "Inactive"}
                                    </td>
                                    <td>
                                        <Link
                                            href={`${route(
                                                "clients.show",
                                                client.id
                                            )}`}
                                            className="btn btn-warning btn-sm"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(client.id)
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
                    <br />
                    {renderPagination()}
                </div>
            </div>
        </div>
    );
}

export default Table;
