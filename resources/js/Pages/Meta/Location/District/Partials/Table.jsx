import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { toast } from "react-toastify";
import { deleteDistrict } from "@/Helpers/Api/DistrictApi";

function Table({ districts, pagination, onPageChange, onDelete }) {
    const [expandedRows, setExpandedRows] = useState({});

    const toggleRowExpansion = (id) => {
        setExpandedRows((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
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

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this district?")) {
            deleteDistrict(id);
            router.visit(route("districts.index"));
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
                                    Province Name
                                </th>
                                <th className="bg-primary" scope="col">
                                    District Name
                                </th>

                                <th className="bg-primary" scope="col">
                                    Districts
                                </th>
                                <th className="bg-primary" scope="col">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {districts.map((district) => (
                                <React.Fragment key={district.id}>
                                    <tr>
                                        <th scope="row">{district.id}</th>
                                        <td>
                                        <Link
                                                href={`${route(
                                                    "provinces.show",
                                                    district.province.id
                                                )}`}
                                            >
                                                {district.province.name_en}
                                            </Link>
                                            </td>
                                        <td>{district.name_en}</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    toggleRowExpansion(
                                                        district.id
                                                    )
                                                }
                                                className="btn btn-primary btn-sm ms-2"
                                            >
                                                {expandedRows[district.id]
                                                    ? "Cities"
                                                    : "Cities"}
                                            </button>
                                        </td>
                                        <td>

                                            <Link
                                                href={`${route(
                                                    "districts.show",
                                                    district.id
                                                )}`}
                                                className="btn btn-warning btn-sm ms-2"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-danger btn-sm ms-2"
                                                onClick={() =>
                                                    handleDelete(district.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    {expandedRows[district.id] && (
                                        <tr>
                                            <td colSpan="12">
                                                <div className="expanded-row-content">
                                                    <table className="table table-hover">
                                                        <tbody className="table-success">
                                                            <tr>
                                                                <td>

                                                                    {district
                                                                        .cities
                                                                        .length >
                                                                    0
                                                                        ? district.cities
                                                                              .map(
                                                                                  (
                                                                                      city
                                                                                  ) =>
                                                                                      city.name_en
                                                                              )
                                                                              .join(
                                                                                  " , "
                                                                              )
                                                                        : "No Districts"}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
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