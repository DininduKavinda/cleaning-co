import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import SearchBox from "./Partials/SearchBox";
import Table from "./Partials/Table";

function Index({ auth }) {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                let url = "http://127.0.0.1:8000/api/admin/roles";
                const response = await axios.get(url);
                setRoles(response.data.data);
            } catch (error) {
                console.error(
                    "There was an error fetching the role data!",
                    error
                );
            }
        };

        fetchRoles();
    });


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
                <SearchBox
                />
                <Table roles={roles} />
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
