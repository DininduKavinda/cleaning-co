import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SearchBox from "./Partials/SearchBox";
import Table from "./Partials/Table";
import { getMatters } from "@/Helpers/Api/MatterApi";

function Index({ auth }) {

    const [matters, setMatters] = useState([]);
    const [nameQuery, setNameQuery] = useState("");
    const [codeQuery, setCodeQuery] = useState("");
    const [startedAtQuery, setStartedAtQuery] = useState("");
    const [endedAtQuery, setEndedAtQuery] = useState("");
    const [statusQuery, setStatusQuery] = useState("");
    const [activeQuery, setActiveQuery] = useState("");
    const [taskQuery, setTaskQuery] = useState(null);
    const [clientQuery, setClientQuery] = useState(null);
    const [staffQuery, setStaffQuery] = useState(null);
    const [approvedByQuery, setApprovedByQuery] = useState(null);
    const [departmentQuery, setDepartmentQuery] = useState(null);

    const [pagination, setPagination] = useState({
        currentPage: 1,
        lastPage: 1,
        total: 0,
        perPage: 10,
    });

    const fetchMatters = async (page = 1) => {
        try {
            const params = [];

            if (
                nameQuery ||
                codeQuery ||
                startedAtQuery ||
                statusQuery ||
                activeQuery ||
                taskQuery ||
                clientQuery ||
                staffQuery ||
                approvedByQuery ||
                departmentQuery
            ) {
                if (nameQuery) {
                    params.push(`name[like]=${(nameQuery)}`);
                }
                if (codeQuery) {
                    params.push(`code[like]=${(codeQuery)}`);
                }
                if (startedAtQuery) {
                    params.push(`started_at[gte]=${(startedAtQuery)}`);
                }

                if (statusQuery !== "") {
                    params.push(`status[eq]=${(statusQuery)}`);
                }
                if (activeQuery !== "") {
                    params.push(`active[eq]=${(activeQuery)}`);
                }
                if (taskQuery) {
                    params.push(`task_id[eq]=${(taskQuery)}`);
                }
                if (clientQuery) {
                    params.push(`client_id[eq]=${(clientQuery)}`);
                }
                if (staffQuery) {
                    params.push(`staff_id[eq]=${(staffQuery)}`);
                }
                if (approvedByQuery) {
                    params.push(`approved_by_id[eq]=${(approvedByQuery)}`);
                }
                if (departmentQuery) {
                    params.push(`department_id[eq]=${(departmentQuery)}`);
                }
            }

            const queryString = params.length > 0 ? `&${params.join("&")}` : "";

            const response = await getMatters(page, queryString);

            setMatters(response.data.data);
            setPagination({
                currentPage: response.data.meta.current_page,
                lastPage: response.data.meta.last_page,
                total: response.data.meta.total,
                perPage: response.data.meta.per_page,
            });
        } catch (error) {
            console.error("There was an error fetching the matter data!", error);
        }
    };

    useEffect(() => {
        fetchMatters();
    }, [
        nameQuery,
        codeQuery,
        startedAtQuery,
        endedAtQuery,
        statusQuery,
        activeQuery,
        taskQuery,
        clientQuery,
        staffQuery,
        approvedByQuery,
        departmentQuery,
    ]);

    const handleSearch = (name) => setNameQuery(name);
    const handleCodeSearch = (code) => setCodeQuery(code);
    const handleStartedAtSearch = (date) => setStartedAtQuery(date);
    const handleEndedAtSearch = (date) => setEndedAtQuery(date);
    const handleStatusSearch = (status) => setStatusQuery(status);
    const handleActiveSearch = (active) => setActiveQuery(active);
    const handleTaskSearch = (taskId) => setTaskQuery(taskId);
    const handleClientSearch = (clientId) => setClientQuery(clientId);
    const handleStaffSearch = (staffId) => setStaffQuery(staffId);
    const handleApprovedBySearch = (approvedById) => setApprovedByQuery(approvedById);
    const handleDepartmentSearch = (departmentId) => setDepartmentQuery(departmentId);

    const handlePageChange = (page) => fetchMatters(page);

    return (
        <AuthenticatedLayout
            matter={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Matters
                </h2>
            }
        >
            <div className="container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <h2>Matters</h2>
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
                    onSearch={handleSearch}
                    onActiveSearch={handleActiveSearch}
                    onTaskSearch={handleTaskSearch}
                    onClientSearch={handleClientSearch}
                    onApproved_bySearch={handleApprovedBySearch}
                    onStaffSearch={handleStaffSearch}
                    onDepartmentSearch={handleDepartmentSearch}
                    onCodeSearch={handleCodeSearch}
                    onStartedAtSearch={handleStartedAtSearch}
                    onEndedAtSearch={handleEndedAtSearch}
                    onStatusSearch={handleStatusSearch}
                />
                <Table
                    matters={matters}
                    pagination={pagination}
                    onPageChange={handlePageChange}
                />
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
