import React from "react";
import Table from "@/Components/Table";
import { deleteDepartment } from "@/Helpers/Api/DepartmentApi";

function DepartmentsTable({ departments, pagination, onPageChange }) {
    const columns = ["Id", "Department Name","status", "Actions"];
    const columnData = ["id", "name", "active"];
    const actions = {
        show: "departments.show", 
        delete: deleteDepartment 
    };

    return (
        <Table
            data={departments}
            columns={columns}
            columnData={columnData}
            actions={actions}
            pagination={pagination}
            onPageChange={onPageChange}
            onDelete={actions.delete} 
        />
    );
}

export default DepartmentsTable;
