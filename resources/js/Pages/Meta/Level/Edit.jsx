import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { usePage, useForm } from "@inertiajs/react";
import { createLevel, getLevelById, updateLevel } from "@/Helpers/Api/LevelApi";
import { showToast } from "@/Components/Toastr";

function LevelForm({ auth }) {
    const page_info = usePage().props;
    const id = page_info.level?.id;

    const {
        data: level,
        setData: setLevel,
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
            fetchLevel();
        }
    }, [id]);

    const fetchLevel = async () => {
        try {
            const response = await getLevelById(id);
            const levelData = response.data.data;
            setLevel({
                name: levelData.name,

            });
        } catch (error) {
            console.error("Error fetching level data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLevel({ ...level, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await updateLevel(id, level);
            } else {
                await createLevel(level);
            }
        } catch (error) {
            console.error("Error saving level data:", error);
        }
    };



    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {isEditing ? "Edit Level" : "Create Level"}
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>
                                {isEditing ? "Edit Level" : "Create Level"}
                            </h2>
                        </div>
                        <div className="col-sm-6 col-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="iconly-Home icli svg-color"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">Levels</li>
                                <li className="breadcrumb-item active">
                                    {isEditing
                                        ? "Edit Level"
                                        : "Create Level"}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="edit-level">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header card-no-border pb-0">
                                    <h3 className="card-title mb-0">
                                        {isEditing
                                            ? level.name
                                            : "New Level"}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Level Name
                                            </label>
                                            <input
                                                className="form-control"
                                                name="name"
                                                value={level.name}
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
                                                    ? "Update Level"
                                                    : "Create Level"}
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

export default LevelForm;
