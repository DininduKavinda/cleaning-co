import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, useForm } from "@inertiajs/react";
import {
    createTimecardTask,
    getTimecardTaskById,
    updateTimecardTask,
} from "@/Helpers/Api/TimecardTaskApi";
import BootstrapToaster from "@/Components/BootstrapToaster";

function TimecardTaskForm({ auth }) {
    const page_info = usePage().props;
    const id = page_info.timecardTask?.id;
    const [toastData, setToastData] = useState({ type: "", message: "", title: "" });
    const {
        data: timecardTask,
        setData: setTimecardTask,
        put,
        post,
        reset,
    } = useForm({
        name: "",
        rate: "",
        rate_type: "",
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            fetchTimecardTask();
        }
    }, [id]);

    const fetchTimecardTask = async () => {
        try {
            const response = await getTimecardTaskById(id);
            const timecardTaskData = response.data.data;
            setTimecardTask({
                name: timecardTaskData.name,
                rate: timecardTaskData.rate,
                rate_type: timecardTaskData.rate_type,
            });
        } catch (error) {
            console.error("Error fetching timecardTask data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTimecardTask({ ...timecardTask, [name]: value });
    };

    const handleRadioChange = (e) => {
        setTimecardTask({ ...timecardTask, rate_type: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (isEditing) {
              response =  await updateTimecardTask(id, timecardTask);
            } else {
              response =  await createTimecardTask(timecardTask);
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
            console.error("Error saving timecardTask data:", error);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {isEditing ? "Edit TimecardTask" : "Create TimecardTask"}
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>
                                {isEditing
                                    ? "Edit TimecardTask"
                                    : "Create TimecardTask"}
                            </h2>
                        </div>
                        <div className="col-sm-6 col-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="iconly-Home icli svg-color"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    TimecardTasks
                                </li>
                                <li className="breadcrumb-item active">
                                    {isEditing
                                        ? "Edit TimecardTask"
                                        : "Create TimecardTask"}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="edit-timecardTask">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header card-no-border pb-0">
                                    <h3 className="card-title mb-0">
                                        {isEditing
                                            ? timecardTask.name
                                            : "New TimecardTask"}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                TimecardTask Name
                                            </label>
                                            <input
                                                className="form-control"
                                                name="name"
                                                value={timecardTask.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">
                                                Rate
                                            </label>
                                            <input
                                                className="form-control"
                                                name="rate"
                                                value={timecardTask.rate}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <div className="form-check radio radio-primary ps-0">
                                                <ul className="radio-wrapper">
                                                    <li>
                                                        <input
                                                            className="form-check-input"
                                                            id="radio-hourly"
                                                            type="radio"
                                                            name="rate_type"
                                                            value={1}
                                                            checked={timecardTask.rate_type == 1}
                                                            onChange={handleRadioChange}
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="radio-hourly"
                                                        >
                                                            <i className="fa-solid fa-clock"></i>
                                                            <span>Hourly</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            className="form-check-input"
                                                            id="radio-daily"
                                                            type="radio"
                                                            name="rate_type"
                                                            value={2}
                                                            checked={timecardTask.rate_type == 2}
                                                            onChange={handleRadioChange}
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="radio-daily"
                                                        >
                                                            <i className="fa-solid fa-calendar"></i>
                                                            <span>Daily</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="form-footer">
                                            <button
                                                className="btn btn-primary btn-block"
                                                type="submit"
                                            >
                                                {isEditing
                                                    ? "Update TimecardTask"
                                                    : "Create TimecardTask"}
                                            </button>
                                        </div>
                                    </form>
                                    {toastData.message && <BootstrapToaster type={toastData.type} message={toastData.message} title={toastData.title} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default TimecardTaskForm;
