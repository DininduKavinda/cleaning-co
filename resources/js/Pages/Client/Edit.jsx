import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import LocationForm from "@/Components/LocationForm";
import {
    createClient,
    getClientById,
    updateClient,
} from "@/Helpers/Api/ClientApi";
import BootstrapToaster from "@/Components/BootstrapToaster";
function ClientForm({ auth }) {
    const page_info = usePage().props;
    const id = page_info.client?.id; const [toastData, setToastData] = useState({ type: "", message: "", title: "" });
    const [client, setClient] = useState({
        nic: "",
        name: "",
        mobile: "",
        phone: "",
        address: "",
        roles: ["user"],
        country_id: "",
        province_id: "",
        district_id: "",
        city_id: "",
        full_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        image: null,
        last_login: "",
        active: 1,
    });
    const [isEditing, setIsEditing] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            fetchClient();
        }
    }, [id]);

    const fetchClient = async () => {
        try {
            const response = await getClientById(id);
            const clientData = response.data.data;
            setClient({
                nic: clientData.nic,
                name: clientData.name,
                mobile: clientData.mobile,
                phone: clientData.phone,
                address: clientData.address,
                country_id: clientData.country_id,
                province_id: clientData.province_id,
                district_id: clientData.district_id,
                city_id: clientData.city_id,
                full_name: clientData.full_name,
                email: clientData.email,
                roles: clientData.roles,
                active: clientData.active,
            });
            setImagePreview(clientData.image);
        } catch (error) {
            console.error("Error fetching client data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setClient({ ...client, image: file });
        setImagePreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(client).forEach((key) => {
            formData.append(key, client[key]);
        });
        try {
            let response;
            if (isEditing) {
                response = await updateClient(id, formData);
            } else {
                response = await createClient(formData);
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
            console.error("Error saving client data:", error);
        }
    };

    return (
        <AuthenticatedLayout
            client={auth.client}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {isEditing ? "Edit Client" : "Create Client"}
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>Edit Profile</h2>
                        </div>
                        <div className="col-sm-6 col-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">
                                        <i className="iconly-Home icli svg-color"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">Users</li>
                                <li className="breadcrumb-item active">
                                    Edit Profile
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="edit-profile">
                    <form onSubmit={handleSubmit} className="row">
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-header card-no-border pb-0">
                                    <h3 className="card-title mb-0">
                                        Client Profile
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className="row mb-2">
                                        <div className="profile-title">
                                            <div className="d-flex gap-3">
                                                {imagePreview ? (
                                                    <img
                                                        className="img-70 rounded-circle"
                                                        alt="Profile"
                                                        src={imagePreview}
                                                    />
                                                ) : (
                                                    <img
                                                        className="img-70 rounded-circle"
                                                        alt="Default"
                                                        src="/theme/assets/images/user/user.png"
                                                    />
                                                )}
                                                <div className="flex-grow-1">
                                                    <h3 className="mb-1">
                                                        {client.name ||
                                                            "New Client"}
                                                    </h3>
                                                    <p>
                                                        {client.roles.join(
                                                            ", "
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="form-label">NIC</h6>
                                        <input
                                            className="form-control"
                                            name="nic"
                                            value={client.nic}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="form-label">Username</h6>
                                        <input
                                            className="form-control"
                                            name="name"
                                            value={client.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="form-label">Mobile</h6>
                                        <input
                                            className="form-control"
                                            name="mobile"
                                            value={client.mobile}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="form-label">Phone</h6>
                                        <input
                                            className="form-control"
                                            name="phone"
                                            value={client.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="form-label">Address</h6>
                                        <input
                                            className="form-control"
                                            name="address"
                                            value={client.address}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="form-label">
                                            Upload Image
                                        </h6>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="card">
                                <div className="card-header card-no-border pb-0">
                                    <h3 className="card-title mb-0">
                                        Edit Client Details
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Full Name
                                                </label>
                                                <input
                                                    className="form-control"
                                                    name="full_name"
                                                    value={client.full_name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Email
                                                </label>
                                                <input
                                                    className="form-control"
                                                    name="email"
                                                    value={client.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                                <input
                                                    hidden
                                                    className="form-control"
                                                    name="active"
                                                    value={client.active}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        {!isEditing && (
                                            <>
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            name="password"
                                                            value={
                                                                client.password
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">
                                                            Confirm Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            name="password_confirmation"
                                                            value={
                                                                client.password_confirmation
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        <LocationForm
                                            client={client}
                                            setClient={setClient}
                                        />

                                        <div className="card-footer">
                                            <button
                                                className="btn btn-primary btn-block"
                                                type="submit"
                                            >
                                                {isEditing
                                                    ? "Update Client"
                                                    : "Create Client"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {toastData.message && <BootstrapToaster type={toastData.type} message={toastData.message} title={toastData.title} />}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default ClientForm;
