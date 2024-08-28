import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { usePage } from "@inertiajs/react";

function UserForm({ auth }) {
    const page_info = usePage().props;
    const id = page_info.user?.id;
    console.log(page_info);
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        roles: [],
        last_login: null,
        active: 1,
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            fetchUser();
        }
    }, [id]);

    const fetchUser = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/admin/users/${id}`);
            const userData = response.data.data;
            setUser({
                name: userData.name,
                email: userData.email,
                roles: userData.roles,
                active: userData.active,
            });
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await axios.put(`http://127.0.0.1:8000/api/admin/users/${id}`, user);
            } else {
                await axios.post(`http://127.0.0.1:8000/api/admin/users`, user);
            }
            // Handle success (e.g., redirect, show a message, etc.)
        } catch (error) {
            console.error("Error saving user data:", error);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {isEditing ? "Edit User" : "Create User"}
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
                                <li className="breadcrumb-item">Users</li>
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
                                        {isEditing ? user.name : "New User"}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <input
                                                className="form-control"
                                                name="name"
                                                value={user.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input
                                                className="form-control"
                                                name="email"
                                                value={user.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        {!isEditing && (
                                            <>
                                                <div className="mb-3">
                                                    <label className="form-label">Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name="password"
                                                        value={user.password}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Confirm Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name="confirm_password"
                                                        value={user.confirm_password}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                            </>
                                        )}
                                        <div className="mb-3">
                                            <label className="form-label">Roles <span>(write roles manually for security reasons e.g., admin, superadmin, staff, client)</span></label>
                                            <input
                                                className="form-control"
                                                name="roles"
                                                value={user.roles.join(", ")}
                                                onChange={(e) =>
                                                    setUser({
                                                        ...user,
                                                        roles: e.target.value.split(", "),
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Active</label>
                                            <select
                                                className="form-control"
                                                name="active"
                                                value={user.active}
                                                onChange={handleInputChange}
                                            >
                                                <option value={1}>Active</option>
                                                <option value={0}>Inactive</option>
                                            </select>
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

export default UserForm;