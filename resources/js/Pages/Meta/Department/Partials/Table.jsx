import React from "react";
import Table from "@/Components/Table";
import { deleteDepartment } from "@/Helpers/Api/DepartmentApi";

function DepartmentsTable({ departments, pagination, onPageChange }) {
    const columns = ["Id", "Department Name", "Actions"];
    const actions = {
        show: "departments.show", 
        delete: deleteDepartment 
    };

    return (
        <Table
            data={departments}
            columns={columns}
            actions={actions}
            pagination={pagination}
            onPageChange={onPageChange}
            onDelete={actions.delete} 
        />
    );
}

export default DepartmentsTable;
