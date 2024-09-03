import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import SearchBox from "./Partials/SearchBox";
import Table from "./Partials/Table";
import { getRoles } from "@/Helpers/Api/RoleApi";

function Index({ auth }) {
    const [roles, setRoles] = useState([]);

    const fetchRoles = async () => {
        try {
            const response = await getRoles();
            setRoles(response.data.data);
        } catch (error) {
            console.error("There was an error fetching the role data!", error);
        }
    };

    useEffect(() => {
        fetchRoles(); // Fetch roles only once on component mount
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <AuthenticatedLayout
            role={auth.role}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Roles
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>Roles</h2>
                            <p className="mb-0 text-title-gray">
                                Welcome back! Let’s start from where you left.
                            </p>
                        </div>
                        <div className="col-sm-6 col-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="index.html">
                                        <i className="iconly-Home icli svg-color"></i>
                                    </Link>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-12">
                <SearchBox />
                <Table roles={roles} />
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
