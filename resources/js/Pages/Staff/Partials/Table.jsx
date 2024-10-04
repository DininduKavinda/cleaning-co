import React from "react";
import Table from "@/Components/Table";
import { deleteStaff } from "@/Helpers/Api/StaffApi";

function StaffTable({ staffs, pagination, onPageChange }) {
    const columns = [
        "Id",
        "Level",
        "Department",
        "Name",
        "NIC",
        "Status",
        "Action",
    ];

    const columnData = [
        "id",
        "level.name",
        "department.name",
        "full_name",
        "nic",
        "active",
    ];

    const actions = {
        show: "staff.show",
        delete: deleteStaff,
    };

    return (
        <Table
            data={staffs}
            columns={columns}
            actions={actions}
            columnData={columnData}
            pagination={pagination}
            onPageChange={onPageChange}
            onDelete={actions.delete}
        />
    );
}

export default StaffTable;
