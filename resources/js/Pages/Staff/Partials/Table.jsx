import React from "react";
import { Link, router } from "@inertiajs/react";
import { deleteStaff } from "@/Helpers/Api/StaffApi";

function Table({ staffs, pagination, onPageChange }) {
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this staff?")) {
            try {
                await deleteStaff(id);
                router.visit(route("staff.index"));
            } catch (error) {
                console.error("Error deleting staff:", error);
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

    return (
        <div className="card overflow-hidden">
            <div className="card-header card-no-border">
                <div className="table-responsive signal-table">
                    <table className="table table-hover">
                        <thead className="table-primary">
                            <tr>
                                <th className="bg-primary" scope="col">Id</th>
                                <th className="bg-primary" scope="col">Level</th>
                                <th className="bg-primary" scope="col">Country </th>
                                <th className="bg-primary" scope="col">Province </th>
                                <th className="bg-primary" scope="col">District </th>
                                <th className="bg-primary" scope="col">City </th>
                                <th className="bg-primary" scope="col">Department </th>
                                <th className="bg-primary" scope="col">NIC</th>
                                <th className="bg-primary" scope="col">Roles</th>
                                <th className="bg-primary" scope="col">Title</th>
                                <th className="bg-primary" scope="col">Initial</th>
                                <th className="bg-primary" scope="col">Address</th>
                                <th className="bg-primary" scope="col">Mobile</th>
                                <th className="bg-primary" scope="col">Civil Status</th>
                                <th className="bg-primary" scope="col">Active</th>
                                <th className="bg-primary" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {staffs.map((staff) => (
                                <tr key={staff.id}>
                                    <th scope="row">{staff.id}</th>
                                    <td>{staff.level_id}</td>
                                    <td>{staff.country_id}</td>
                                    <td>{staff.province_id}</td>
                                    <td>{staff.district_id}</td>
                                    <td>{staff.city_id}</td>
                                    <td>{staff.department_id}</td>
                                    <td>{staff.nic}</td>
                                    <td>
                                        {staff.roles.length > 0
                                            ? staff.roles.join(", ")
                                            : "No Roles"}
                                    </td>
                                    <td>{staff.title}</td>
                                    <td>{staff.initial}</td>
                                    <td>{staff.address}</td>
                                    <td>{staff.mobile}</td>                                    <td>{staff.civil_status}</td>
                                    <td>{staff.active ? "Active" : "Inactive"}</td>
                                    <td>
                                        <Link
                                            href={`${route("staff.show", staff.id)}`}
                                            className="btn btn-warning btn-sm"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(staff.id)}
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
