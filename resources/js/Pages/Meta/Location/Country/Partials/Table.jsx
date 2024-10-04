import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { toast } from "react-toastify";
import { deleteCountry } from "@/Helpers/Api/CountryApi";
import Pagination from "@/Components/Pagination";
function Table({ countries, pagination, onPageChange, onDelete }) {
    const [expandedRows, setExpandedRows] = useState({});

    const toggleRowExpansion = (id) => {
        setExpandedRows((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };
    
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this country?")) {
            deleteCountry(id);
            router.visit(route("countries.index"));
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
                                    ISO Code
                                </th>
                                <th className="bg-primary" scope="col">
                                    Phone Code
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
                            {countries.map((country) => (
                                <React.Fragment key={country.id}>
                                    <tr>
                                        <th scope="row">{country.id}</th>
                                        <td>{country.country_name}</td>
                                        <td>{country.iso_code}</td>
                                        <td>{country.phone_code}</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    toggleRowExpansion(
                                                        country.id
                                                    )
                                                }
                                                className="btn btn-primary btn-sm ms-2"
                                            >
                                                {expandedRows[country.id]
                                                    ? "Provinces"
                                                    : "Prvinces"}
                                            </button>
                                        </td>
                                        <td>
                                            <Link
                                                href={`${route(
                                                    "countries.show",
                                                    country.id
                                                )}`}
                                                className="btn btn-warning btn-sm ms-2"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-danger btn-sm ms-2"
                                                onClick={() =>
                                                    handleDelete(country.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    {expandedRows[country.id] && (
                                        <tr>
                                            <td colSpan="12">
                                                <div className="expanded-row-content">
                                                    <table className="table table-hover">
                                                        <tbody className="table-success">
                                                            <tr>
                                                                <td>
                                                                    {country
                                                                        .provinces
                                                                        .length >
                                                                    0
                                                                        ? country.provinces
                                                                              .map(
                                                                                  (
                                                                                      province
                                                                                  ) =>
                                                                                      province.name_en
                                                                              )
                                                                              .join(
                                                                                  " , "
                                                                              )
                                                                        : "No Provinces"}
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
