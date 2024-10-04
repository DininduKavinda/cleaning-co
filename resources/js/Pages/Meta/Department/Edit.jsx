import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { usePage, useForm } from "@inertiajs/react";
import {
    createDepartment,
    getDepartmentById,
    updateDepartment,
} from "@/Helpers/Api/DepartmentApi";
import BootstrapToaster from "@/Components/BootstrapToaster";

function DepartmentForm({ auth }) {
    const page_info = usePage().props;
    const id = page_info.department?.id; const [toastData, setToastData] = useState({ type: "", message: "", title: "" });

    const {
        data: department,
        setData: setDepartment,
        put,
        post,
        reset,
    } = useForm({
        name: "",
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            fetchDepartment();
        }
    }, [id]);

    const fetchDepartment = async () => {
        try {
            const response = await getDepartmentById(id);
            const departmentData = response.data.data;
            setDepartment({
                name: departmentData.name,
            });
        } catch (error) {
            console.error("Error fetching department data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDepartment({ ...department, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (isEditing) {
                response = await updateDepartment(id, department);
            } else {
                response = await createDepartment(department);
            }
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
        } catch (error) {
            console.error("Error saving department data:", error);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {isEditing ? "Edit Department" : "Create Department"}
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>
                                {isEditing
                                    ? "Edit Department"
                                    : "Create Department"}
                            </h2>
                        </div>
                        <div className="col-sm-6 col-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="iconly-Home icli svg-color"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">Departments</li>
                                <li className="breadcrumb-item active">
                                    {isEditing
                                        ? "Edit Department"
                                        : "Create Department"}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="edit-department">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header card-no-border pb-0">
                                    <h3 className="card-title mb-0">
                                        {isEditing
                                            ? department.name
                                            : "New Department"}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Department Name
                                            </label>
                                            <input
                                                className="form-control"
                                                name="name"
                                                value={department.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div className="form-footer">
                                            <button
                                                className="btn btn-primary btn-block"
                                                type="submit"
                                            >
                                                {isEditing
                                                    ? "Update Department"
                                                    : "Create Department"}
                                            </button>
                                        </div>
                                    </form>
                                    {toastData.message && (
                                        <BootstrapToaster
                                            type={toastData.type}
                                            message={toastData.message}
                                            title={toastData.title}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default DepartmentForm;
