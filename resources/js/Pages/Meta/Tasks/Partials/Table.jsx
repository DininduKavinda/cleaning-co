import React from "react";
import Table from "@/Components/Table";
import { deleteTask } from "@/Helpers/Api/TaskApi";

function TasksTable({ tasks, pagination, onPageChange }) {
    const columns = ["Id", "Task","Status", "Action"];

    const columnData = ["id", "name","active"];

    const actions = {
        show: "tasks.show",
        delete: deleteTask,   
    };

    return (
        <Table
            data={tasks}
            columns={columns}
            actions={actions}
            columnData={columnData}
            pagination={pagination}
            onPageChange={onPageChange}
            onDelete={actions.delete}
        />
    );
}

export default TasksTable;
