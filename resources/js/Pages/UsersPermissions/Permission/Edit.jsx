import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { usePage } from "@inertiajs/react";
import { createPermission, getPermissionById, updatePermission } from "@/Helpers/Api/PermissionApi";

function PermissionForm({ auth }) {
    const page_info = usePage().props;
    const id = page_info.permission?.id;
    const [permission, setPermission] = useState({
        name: ""
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            fetchPermission();
        }
    }, [id]);

    const fetchPermission = async () => {
        try {
            const response = await getPermissionById(id);
            const permissionData = response.data.data;
            setPermission({
                name: permissionData.name,
            });
        } catch (error) {
            console.error("Error fetching permission data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPermission({ ...permission, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(permission);
        try {
            if (isEditing) {
                await updatePermission(id, permission);
            } else {
                await createPermission(permission);
            }
            // Handle success (e.g., redirect, show a message, etc.)
        } catch (error) {
            console.error("Error saving permission data:", error);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <AuthenticatedLayout
            permission={auth.permission}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {isEditing ? "Edit Permission" : "Create Permission"}
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
                                <li className="breadcrumb-item">Permissions</li>
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
                                        {isEditing ? permission.name : "New Permission"}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <input
                                                className="form-control"
                                                name="name"
                                                value={permission.name}
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
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default PermissionForm;
