import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { Link, usePage } from "@inertiajs/react";
import {HEADER} from "@/Helpers/Api/Api";
import BootstrapToaster from "@/Components/BootstrapToaster";

function GivePermission({ auth }) {
    const page_info = usePage().props;
    const roleId = page_info.role?.id;
    const [permissions, setPermissions] = useState([]);
    const [checkedPermissions, setCheckedPermissions] = useState([]);
    const [toastData, setToastData] = useState({ type: "", message: "", title: "" });
    useEffect(() => {
        if (roleId) {
            fetchPermissions();
            fetchRolePermissions();
        }
    }, [roleId]);

    const fetchPermissions = async () => {
        let allPermissions = [];
        let page = 1;
        let lastPage = 1;

        try {
            while (page <= lastPage) {
                const response = await axios.get(
                    `https://cleaning-co.test/api/admin/permissions?page=${page}`,
                    HEADER
                );
                const data = response.data.data;
                allPermissions = [...allPermissions, ...data];

                // Update pagination info
                page++;
                lastPage = response.data.meta.last_page;
            }

            const groupedPermissions = allPermissions.reduce(
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
                `https://cleaning-co.test/api/admin/addPermissionToRole/${roleId}`,
                HEADER
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

        const    response =  await axios.post(
                `https://cleaning-co.test/api/admin/givePermissionToRole/${roleId}`,
                {
                    permission: checkedPermissions,
                } ,HEADER
            );
            if (response.status === 201) {
                setToastData({
                    type: "success",
                    message: "success.",
                    title: "Success",
                });
            }
            else{
                setToastData({
                    type: "error",
                    message: response.data.message,
                    title: "error",
                });
            }
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
                                <h4 className="">
                                    Role: {page_info.role?.name}
                                </h4>
                            </div>
                            <div className="col-sm-12">
                                <div className="card-body">
                                    <div className="row">
                                        <form onSubmit={handleSubmit}>
                                            {Object.keys(permissions).map(
                                                (group) => (
                                                    <div className="col-xxl-4 col-md-6">
                                                        <div
                                                            key={group}
                                                            className=""
                                                        >
                                                            <div className="card-header border-l-primary border-3 card-no-border pb-0 card height-equal">
                                                                <h5 className="">
                                                                    {group
                                                                        .charAt(
                                                                            0
                                                                        )
                                                                        .toUpperCase() +
                                                                        group.slice(
                                                                            1
                                                                        )}
                                                                </h5>
                                                                <div className="">
                                                                    {permissions[
                                                                        group
                                                                    ].map(
                                                                        (
                                                                            permission
                                                                        ) => (
                                                                            <div
                                                                                key={
                                                                                    permission.id
                                                                                }
                                                                                className=""
                                                                            >
                                                                                <div className="form-check form-switch form-check-inline">
                                                                                    <label className="d-flex">
                                                                                        <input
                                                                                            type="checkbox"
                                                                                            role="switch"
                                                                                            value={
                                                                                                permission.name
                                                                                            }
                                                                                            checked={checkedPermissions.includes(
                                                                                                permission.name
                                                                                            )}
                                                                                            onChange={
                                                                                                handleCheckboxChange
                                                                                            }
                                                                                            className="form-check-input switch-primary check-size "
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
                                                        </div>
                                                    </div>
                                                )
                                            )}
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
                                        {toastData.message && <BootstrapToaster type={toastData.type} message={toastData.message} title={toastData.title} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default GivePermission;
