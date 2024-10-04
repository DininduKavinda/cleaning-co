import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { usePage, useForm } from "@inertiajs/react";
import { createTask, getTaskById, updateTask } from "@/Helpers/Api/TaskApi";
import { showToast } from "@/Components/BootstrapToaster";

function TaskForm({ auth }) {
    const page_info = usePage().props;
    const id = page_info.task?.id;

    const {
        data: task,
        setData: setTask,
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
            fetchTask();
        }
    }, [id]);

    const fetchTask = async () => {
        try {
            const response = await getTaskById(id);
            const taskData = response.data.data;
            setTask({
                name: taskData.name,

            });
        } catch (error) {
            console.error("Error fetching task data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await updateTask(id, task);
            } else {
                await createTask(task);
            }
        } catch (error) {
            console.error("Error saving task data:", error);
        }
    };



    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {isEditing ? "Edit Task" : "Create Task"}
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>
                                {isEditing ? "Edit Task" : "Create Task"}
                            </h2>
                        </div>
                        <div className="col-sm-6 col-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="iconly-Home icli svg-color"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">Tasks</li>
                                <li className="breadcrumb-item active">
                                    {isEditing
                                        ? "Edit Task"
                                        : "Create Task"}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="edit-task">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header card-no-border pb-0">
                                    <h3 className="card-title mb-0">
                                        {isEditing
                                            ? task.name
                                            : "New Task"}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Task Name
                                            </label>
                                            <input
                                                className="form-control"
                                                name="name"
                                                value={task.name}
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
                                                    ? "Update Task"
                                                    : "Create Task"}
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

export default TaskForm;
