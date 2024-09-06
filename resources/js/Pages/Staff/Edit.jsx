import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import LocationForm from "@/Components/LocationForm";
import LevelDropdown from "@/Components/LevelDropdown";
import DepartmentDropdown from "@/Components/DepartmentDropdown";
import { createStaff, getStaffById, updateStaff } from "@/Helpers/Api/StaffApi";

function StaffForm({ auth }) {
    const page_info = usePage().props;
    const id = page_info.staff?.id;
    const [staff, setStaff] = useState({
        level_id: "",
        country_id: "",
        province_id: "",
        district_id: "",
        city_id: "",
        department_id: "",
        first_name: "",
        last_name: "",
        nic: "",
        title: "",
        initial: "",
        full_name: "",
        dob: "",
        address: "",
        mobile: "",
        phone: "",
        civil_status: "",
        email: "",
        password: "",
        password_confirmation: "",
        image: null,
        last_login: null,
        active: 1,
    });
    const [isEditing, setIsEditing] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            fetchStaff();
        }
    }, [id]);

    const fetchStaff = async () => {
        try {
            const response = await getStaffById(id);
            const staffData = response.data.data;
            setStaff({
                level_id: staffData.level_id,
                country_id: staffData.country_id,
                province_id: staffData.province_id,
                district_id: staffData.district_id,
                city_id: staffData.city_id,
                department_id: staffData.department_id,
                first_name: staffData.first_name,
                last_name: staffData.last_name,
                nic: staffData.nic,
                title: staffData.title,
                initial: staffData.initial,
                full_name: staffData.full_name,
                dob: staffData.dob,
                address: staffData.address,
                mobile: staffData.mobile,
                phone: staffData.phone,
                civil_status: staffData.civil_status,
                email: staffData.email,
                active: staffData.active,
            });
            setImagePreview(staffData.image);
        } catch (error) {
            console.error("Error fetching staff data:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStaff({ ...staff, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setStaff({ ...staff, image: file });
        setImagePreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(staff).forEach((key) => {
            formData.append(key, staff[key]);
        });
        console.log(staff);
        try {
            if (isEditing) {
                await updateStaff(id, formData);
            } else {
                await createStaff(formData);
            }
        } catch (error) {
            console.error("Error saving staff data:", error);
        }
    };

    return (
        <AuthenticatedLayout
            staff={auth.staff}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {isEditing ? "Edit Staff" : "Create Staff"}
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>
                                {isEditing ? "Edit Profile" : "Create Profile"}
                            </h2>
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
                                    {isEditing
                                        ? "Edit Profile"
                                        : "Create Profile"}
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
                                        Staff Profile
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
                                                        src="../assets/images/user/default.jpg"
                                                    />
                                                )}
                                                <div className="flex-grow-1">
                                                    <h3 className="mb-1">
                                                        {staff.full_name ||
                                                            "New Staff"}
                                                    </h3>
                                                    <p>{staff.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="form-label">NIC</h6>
                                        <input
                                            className="form-control"
                                            name="nic"
                                            value={staff.nic}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="form-label">Title</h6>
                                        <input
                                            className="form-control"
                                            name="title"
                                            value={staff.title}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="form-label">Initials</h6>
                                        <input
                                            className="form-control"
                                            name="initial"
                                            value={staff.initial}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="form-label">
                                            First Name
                                        </h6>
                                        <input
                                            className="form-control"
                                            name="first_name"
                                            value={staff.first_name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="form-label">
                                            Last Name
                                        </h6>
                                        <input
                                            className="form-control"
                                            name="last_name"
                                            value={staff.last_name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="form-label">Mobile</h6>
                                        <input
                                            className="form-control"
                                            name="mobile"
                                            value={staff.mobile}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="form-label">Phone</h6>
                                        <input
                                            className="form-control"
                                            name="phone"
                                            value={staff.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="form-label">Address</h6>
                                        <input
                                            className="form-control"
                                            name="address"
                                            value={staff.address}
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
                                        Edit Staff Details
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Level
                                                </label>
                                                <LevelDropdown
                                                    selectedLevel={
                                                        staff.level_id
                                                    }
                                                    onLevelChange={(value) =>
                                                        setStaff({
                                                            ...staff,
                                                            level_id: value,
                                                        })
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Department
                                                </label>
                                                <DepartmentDropdown
                                                    selectedDepartment={
                                                        staff.department_id
                                                    }
                                                    onDepartmentChange={(
                                                        value
                                                    ) =>
                                                        setStaff({
                                                            ...staff,
                                                            department_id:
                                                                value,
                                                        })
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Full Name
                                                </label>
                                                <input
                                                    className="form-control"
                                                    name="full_name"
                                                    value={staff.full_name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Date of Birth
                                                </label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    name="dob"
                                                    value={staff.dob}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Civil Status
                                                </label>
                                                <input
                                                    className="form-control"
                                                    name="civil_status"
                                                    value={staff.civil_status}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <LocationForm
                                            client={staff}
                                            setClient={setStaff}
                                        />
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                value={staff.email}
                                                onChange={handleInputChange}
                                                required
                                            />
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
                                                                staff.password
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
                                                                staff.password_confirmation
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
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Active
                                            </label>
                                            <select
                                                className="form-control"
                                                name="active"
                                                value={staff.active}
                                                onChange={handleInputChange}
                                            >
                                                <option value={1}>
                                                    Active
                                                </option>
                                                <option value={0}>
                                                    Inactive
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        {isEditing ? "Update" : "Create"} Staff
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default StaffForm;
