import React from "react";
import { Link, router } from "@inertiajs/react";
import { deleteClient } from "@/Helpers/Api/ClientApi";
import Pagination from "@/Components/Pagination";

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
                                    NIC
                                </th>
                                <th className="bg-primary" scope="col">
                                    Roles
                                </th>
                                <th className="bg-primary" scope="col">
                                    Email
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
