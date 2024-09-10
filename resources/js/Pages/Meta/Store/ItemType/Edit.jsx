import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { usePage, useForm } from "@inertiajs/react";
import { createItemType, getItemTypeById, updateItemType } from "@/Helpers/Api/ItemTypeApi";
import { showToast } from "@/Components/Toastr";

function ItemTypeForm({ auth }) {
    const page_info = usePage().props;
    const id = page_info.itemType?.id;

    const {
        data: itemType,
        setData: setItemType,
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
            fetchItemType();
        }
    }, [id]);

    const fetchItemType = async () => {
        try {
            const response = await getItemTypeById(id);
            const itemTypeData = response.data.data;
            setItemType({
                name: itemTypeData.name,

            });
        } catch (error) {
            console.error("Error fetching itemType data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setItemType({ ...itemType, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await updateItemType(id, itemType);
            } else {
                await createItemType(itemType);
            }
        } catch (error) {
            console.error("Error saving itemType data:", error);
        }
    };



    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {isEditing ? "Edit ItemType" : "Create ItemType"}
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>
                                {isEditing ? "Edit ItemType" : "Create ItemType"}
                            </h2>
                        </div>
                        <div className="col-sm-6 col-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="iconly-Home icli svg-color"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">ItemTypes</li>
                                <li className="breadcrumb-item active">
                                    {isEditing
                                        ? "Edit ItemType"
                                        : "Create ItemType"}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="edit-itemType">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header card-no-border pb-0">
                                    <h3 className="card-title mb-0">
                                        {isEditing
                                            ? itemType.name
                                            : "New ItemType"}
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                ItemType Name
                                            </label>
                                            <input
                                                className="form-control"
                                                name="name"
                                                value={itemType.name}
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
                                                    ? "Update ItemType"
                                                    : "Create ItemType"}
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

export default ItemTypeForm;
