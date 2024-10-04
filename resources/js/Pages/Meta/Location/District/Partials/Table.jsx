import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { toast } from "react-toastify";
import { deleteDistrict } from "@/Helpers/Api/DistrictApi";
import Pagination from "@/Components/Pagination";
function Table({ districts, pagination, onPageChange, onDelete }) {
    const [expandedRows, setExpandedRows] = useState({});

    const toggleRowExpansion = (id) => {
        setExpandedRows((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
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
