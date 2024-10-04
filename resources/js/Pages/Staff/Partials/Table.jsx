import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { deleteStaff } from "@/Helpers/Api/StaffApi";
import Pagination from "@/Components/Pagination";
function Table({ staffs, pagination, onPageChange }) {
    const [expandedRows, setExpandedRows] = useState({});

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

    const toggleRowExpansion = (id) => {
        setExpandedRows((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
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
                                <th className="bg-primary" scope="col">Department</th>
                                <th className="bg-primary" scope="col">Address</th>
                                <th className="bg-primary" scope="col">Name</th>
                                <th className="bg-primary" scope="col">NIC</th>
                                <th className="bg-primary" scope="col">DOB</th>
                                <th className="bg-primary" scope="col">Status</th>
                                <th className="bg-primary" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {staffs.map((staff) => (
                                <React.Fragment key={staff.id}>
                                    <tr>
                                        <th scope="row">{staff.id}</th>
                                        <td>{staff.level.name}</td>
                                        <td>{staff.department.name}</td>
                                        <td>{staff.address}</td>
                                        <td>{staff.title} {staff.initial}</td>
                                        <td>{staff.nic}</td>
                                        <td>{staff.dob}</td>
                                        <td>{staff.active ? "Active" : "Inactive"}</td>
                                        <td>
                                        <button
                                                onClick={() => toggleRowExpansion(staff.id)}
                                                className="btn btn-primary btn-sm ms-2"
                                            >
                                                {expandedRows[staff.id] ? "-" : "+"}
                                            </button>
                                            <Link
                                                href={`${route("staff.show", staff.id)}`}
                                                className="btn btn-warning btn-sm ms-2"
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
                                    {expandedRows[staff.id] && (
                                       <tr>
                                       <td colSpan="12">
                                           <div className="expanded-row-content">
                                               <table className="table table-hover">
                                                   <tbody className="table-success">
                                                        <tr>
                                                           <td><strong>Full Name:</strong> {staff.full_name}</td>
                                                           <td><strong>First Name:</strong> {staff.first_name}</td>
                                                           <td><strong>Last Name:</strong> {staff.last_name}</td>
                                                           <td><strong>Civil Status:</strong> {staff.civil_status}</td>
                                                       </tr>
                                                       <tr>
                                                           <td><strong>Email:</strong> {staff.user.email}</td>
                                                           <td><strong>Mobile:</strong> {staff.mobile}</td>
                                                           <td><strong>Phone:</strong> {staff.phone}</td>
                                                           <td><strong>Roles:</strong> {staff.roles.length > 0
                                                                                        ? staff.roles.join(", ")
                                                                                        : "No Roles"}</td>
                                                       </tr>
                                                       <tr>
                                                           <td><strong>Country:</strong> {staff.country.country_name}</td>
                                                           <td><strong>Province:</strong> {staff.province.name_en}</td>
                                                           <td><strong>District:</strong> {staff.district.name_en}</td>
                                                           <td><strong>City:</strong> {staff.city.name_en}</td>
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
