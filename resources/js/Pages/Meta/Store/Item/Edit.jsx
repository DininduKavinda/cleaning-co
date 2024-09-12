import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { usePage, useForm } from "@inertiajs/react";
import { createItem, getItemById, updateItem } from "@/Helpers/Api/ItemApi";
import ItemTypeDropdown from "@/Components/ItemTypeDropdown";

function ItemForm({ auth }) {
    const page_info = usePage().props;
    const id = page_info.item?.id;

    const { data: item, setData: setItem, post, put } = useForm({
        name: "",
        item_type_id: "",
        price: "",
        active: false,
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            fetchItem();
        }
    }, [id]);

    const fetchItem = async () => {
        try {
            const response = await getItemById(id);
            const itemData = response.data.data;
            console.log("Fetched item data:", itemData);
            setItem({
                name: itemData.name,
                item_type_id: itemData.item_type_id,
                price: itemData.price,
                active: itemData.active,
            });
        } catch (error) {
            console.error("Error fetching item data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    };

    const handleLocationChange = (field, value) => {
        setItem((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await updateItem(id, item);
            } else {
                await createItem(item);
            }
        } catch (error) {
            console.error("Error saving item data:", error);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {isEditing ? "Edit Item" : "Create Item"}
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>{isEditing ? "Edit Item" : "Create Item"}</h2>
                        </div>
                        <div className="col-sm-6 col-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="iconly-Home icli svg-color"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">Items</li>
                                <li className="breadcrumb-item active">
                                    {isEditing ? "Edit Item" : "Create Item"}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="edit-item">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header card-no-border pb-0">
                                        <h3 className="card-title mb-0">
                                            {isEditing ? item.name : "New Item"}
                                        </h3>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label">Item Name</label>
                                                <input
                                                    className="form-control"
                                                    name="name"
                                                    value={item.name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Select Item Type</label>
                                                <ItemTypeDropdown
                                                    value={item.item_type_id}
                                                    onChange={(value) =>
                                                        handleLocationChange("item_type_id", value)
                                                    }
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Price</label>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    name="price"
                                                    value={item.price}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <input
                                                    className="form-check-input "
                                                    type="checkbox"
                                                    name="active"
                                                    checked={item.active}
                                                    onChange={(e) =>
                                                        setItem({ ...item, active: e.target.checked })
                                                    }
                                                />
                                               <label className=" px-4 form-label">Active </label>
                                            </div>

                                            <div className="form-footer">
                                                <button
                                                    className="btn btn-primary btn-block"
                                                    type="submit"
                                                >
                                                    {isEditing ? "Update Item" : "Create Item"}
                                                </button>
                                            </div>
                                        </form>
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

export default ItemForm;
