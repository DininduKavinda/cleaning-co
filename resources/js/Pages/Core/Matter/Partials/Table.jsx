import React from "react";
import Table from "@/Components/Table";
import { deleteMatter } from "@/Helpers/Api/MatterApi";


function MatterTable({ matters, pagination, onPageChange }) {
    const columns = [
        'Serial',
        'Task',
        'Matter',
        'Client',
        'Code',
        'Start',
        'End',
        'active','Action'];

    const columnData = [
        'id',
        'task.name',
        'name',
        'client.full_name',
        'code',
        'started_at',
        'ended_at',
        'active',
    ];

    const actions = {
        show: "matters.show",
        delete: deleteMatter,
    };

    return (
        <Table
            data={matters}
            columns={columns}
            actions={actions}
            columnData={columnData}
            pagination={pagination}
            onPageChange={onPageChange}
            onDelete={actions.delete}
        />
    );
}

export default MatterTable;
