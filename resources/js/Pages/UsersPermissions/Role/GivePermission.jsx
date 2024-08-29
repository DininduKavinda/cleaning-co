import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { Link, usePage } from "@inertiajs/react";

function GivePermission({ auth }) {
    const page_info = usePage().props;
    const roleId = page_info.role?.id;
    const [permissions, setPermissions] = useState([]);
    const [checkedPermissions, setCheckedPermissions] = useState([]);

    useEffect(() => {
        if (roleId) {
            fetchPermissions();
            fetchRolePermissions();
        }
    }, [roleId]);

    const fetchPermissions = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/admin/permissions"
            );

            const groupedPermissions = response.data.data.reduce(
                (groups, permission) => {
                    const group = permission.name.split(" ")[1];
                    if (!groups[group]) {
                        groups[group] = [];
                    }
                    groups[group].push(permission);
                    return groups;
                },
                {}
            );
            setPermissions(groupedPermissions);
        } catch (error) {
            console.error("Error fetching all permissions:", error);
        }
    };

    const fetchRolePermissions = async () => {
        try {
            const response = await axios.get(
                `http://127.0.0.1:8000/api/admin/addPermissionToRole/${roleId}`
            );
            const activePermissions = response.data.rolePermissionsNames;
            setCheckedPermissions(
                Object.values(activePermissions).map((name) => name.toString())
            );
        } catch (error) {
            console.error("Error fetching role permissions:", error);
        }
    };

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        setCheckedPermissions((prev) =>
            prev.includes(value)
                ? prev.filter((permission) => permission !== value)
                : [...prev, value]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                `http://127.0.0.1:8000/api/admin/givePermissionToRole/${roleId}`,
                {
                    permission: checkedPermissions,
                }
            );
            alert("Permissions updated successfully!");
        } catch (error) {
            console.error("Error updating permissions:", error);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Give Permissions
                </h2>
            }
        >
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                                    Role: {page_info.role?.name}
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    {Object.keys(permissions).map((group) => (
                                        <div key={group} className="mb-4">
                                            <h5 className="mb-2 font-bold text-lg">
                                                {group.charAt(0).toUpperCase() +
                                                    group.slice(1)}
                                            </h5>
                                            <div className="flex flex-wrap">
                                                {permissions[group].map(
                                                    (permission) => (
                                                        <div
                                                            key={permission.id}
                                                            className="w-full md:w-1/4 p-2"
                                                        >
                                                            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
                                                                <label className="flex items-center">
                                                                    <input
                                                                        type="checkbox"
                                                                        value={
                                                                            permission.name
                                                                        }
                                                                        checked={checkedPermissions.includes(
                                                                            permission.name
                                                                        )}
                                                                        onChange={
                                                                            handleCheckboxChange
                                                                        }
                                                                        className="mr-2"
                                                                    />
                                                                    {permission.name
                                                                        .replace(
                                                                            "_",
                                                                            " "
                                                                        )
                                                                        .replace(
                                                                            /\b\w/g,
                                                                            (
                                                                                l
                                                                            ) =>
                                                                                l.toUpperCase()
                                                                        )}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    <div className="card-body btn-showcase">
                                        <button
                                            type="submit"
                                            className="btn btn-primary d-flex  ms-2"
                                        >
                                            Update
                                        </button>
                                        <Link
                                            href={route("roles.index")}
                                            className="btn btn-info"
                                        >
                                            Cancel
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default GivePermission;
