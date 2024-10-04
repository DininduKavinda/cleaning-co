import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { toast } from "react-toastify";
import { deleteCity } from "@/Helpers/Api/CityApi";
import Pagination from "@/Components/Pagination";
function Table({ cities, pagination, onPageChange, onDelete }) {
    const [expandedRows, setExpandedRows] = useState({});


    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this city?")) {
            deleteCity(id);
            router.visit(route("cities.index"));
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
                                    City Name
                                </th>
                                <th className="bg-primary" scope="col">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {cities.map((city) => (
                                <React.Fragment key={city.id}>
                                    <tr>
                                        <th scope="row">{city.id}</th>
                                        <td>
                                            <Link
                                                href={`${route(
                                                    "districts.show",
                                                    city.district.id
                                                )}`}
                                            >
                                                {city.district.name_en}
                                            </Link>
                                        </td>
                                        <td>{city.name_en}</td>

                                        <td>
                                            <Link
                                                href={`${route(
                                                    "cities.show",
                                                    city.id
                                                )}`}
                                                className="btn btn-warning btn-sm ms-2"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-danger btn-sm ms-2"
                                                onClick={() =>
                                                    handleDelete(city.id)
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
