import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { usePage } from "@inertiajs/react";

function RoleForm({ auth }) {
    const page_info = usePage().props;
    const id = page_info.role?.id;
    // console.log(page_info);
    const [role, setRole] = useState({
        name: "",
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            fetchRole();
        }
    }, [id]);

    const fetchRole = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/admin/roles/${id}`);
            const roleData = response.data.data;
            setRole({
                name: roleData.name,
            });
        } catch (error) {
            console.error("Error fetching role data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRole({ ...role, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await axios.put(`http://127.0.0.1:8000/api/admin/roles/${id}`, role);
            } else {
                await axios.post(`http://127.0.0.1:8000/api/admin/roles`, role);
            }
            // Handle success (e.g., redirect, show a message, etc.)
        } catch (error) {
            console.error("Error saving role data:", error);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {isEditing ? "Edit Role" : "Create Role"}
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>{isEditing ? "Edit Profile" : "Create Profile"}</h2>
                        </div>
                        <div className="col-sm-6 col-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="iconly-Home icli svg-color"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">Roles</li>
                                <li className="breadcrumb-item active">
                                    {isEditing ? "Edit Profile" : "Create Profile"}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="edit-profile">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header card-no-border pb-0">
                                    <h3 className="card-title mb-0">
                                        {isEditing ? role.name : "New Role"}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <input
                                                className="form-control"
                                                name="name"
                                                value={role.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-footer">
                                            <button className="btn btn-primary btn-block" type="submit">
                                                {isEditing ? "Update Profile" : "Create Profile"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* Additional content can go here */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default RoleForm;
