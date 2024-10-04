import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { toast } from "react-toastify";
import { deleteProvince } from "@/Helpers/Api/ProvinceApi";
import Pagination from "@/Components/Pagination";
function Table({ provinces, pagination, onPageChange, onDelete }) {
    const [expandedRows, setExpandedRows] = useState({});

    const toggleRowExpansion = (id) => {
        setExpandedRows((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };
    

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this province?")) {
            deleteProvince(id);
            router.visit(route("provinces.index"));
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
                                    Country Name
                                </th>
                                <th className="bg-primary" scope="col">
                                    Province Name
                                </th>

                                <th className="bg-primary" scope="col">
                                    Provinces
                                </th>
                                <th className="bg-primary" scope="col">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {provinces.map((province) => (
                                <React.Fragment key={province.id}>
                                    <tr>
                                        <th scope="row">{province.id}</th>
                                        <td>
                                            <Link
                                                href={`${route(
                                                    "countries.show",
                                                    province.country.id
                                                )}`}
                                            >
                                                {province.country.country_name}
                                            </Link>
                                        </td>
                                        <td>{province.name_en}</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    toggleRowExpansion(
                                                        province.id
                                                    )
                                                }
                                                className="btn btn-primary btn-sm ms-2"
                                            >
                                                {expandedRows[province.id]
                                                    ? "Districts"
                                                    : "Districts"}
                                            </button>
                                        </td>
                                        <td>
                                            <Link
                                                href={`${route(
                                                    "provinces.show",
                                                    province.id
                                                )}`}
                                                className="btn btn-warning btn-sm ms-2"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-danger btn-sm ms-2"
                                                onClick={() =>
                                                    handleDelete(province.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    {expandedRows[province.id] && (
                                        <tr>
                                            <td colSpan="12">
                                                <div className="expanded-row-content">
                                                    <table className="table table-hover">
                                                        <tbody className="table-success">
                                                            <tr>
                                                                <td>
                                                                    {province
                                                                        .districts
                                                                        .length >
                                                                    0
                                                                        ? province.districts
                                                                              .map(
                                                                                  (
                                                                                      district
                                                                                  ) =>
                                                                                      district.name_en
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
