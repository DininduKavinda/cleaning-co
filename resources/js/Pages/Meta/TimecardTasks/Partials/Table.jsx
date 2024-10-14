import React from "react";
import Table from "@/Components/Table";
import { deleteTimecardTask } from "@/Helpers/Api/TimeCardTaskApi";

function TimecardTasksTable({ timecardTasks, pagination, onPageChange }) {
    const columns = [
        "Id",
        "TimecardTask",
        "Task Rate",
        "Rate Type",
        "Status",
        "Action",
    ];

    const columnData = ["id", "name", "rate", "rate_type", "active"];

    const actions = {
        show: "timecardTasks.show",
        delete: deleteTimecardTask,
    };

    return (
        <Table
            data={timecardTasks}
            columns={columns}
            actions={actions}
            columnData={columnData}
            pagination={pagination}
            onPageChange={onPageChange}
            onDelete={actions.delete}
        />
    );
}
export default TimecardTasksTable;
