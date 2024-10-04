import React from "react";
import Table from "@/Components/Table";
import { deleteLevel } from "@/Helpers/Api/LevelApi";

function LevelsTable({ levels, pagination, onPageChange }) {
    const columns = ["Id", "Level Name", "Actions"];

    const columnData = ["id", "name"];

    const actions = {
        show: "levels.show",
        delete: deleteLevel,
    };

    return (
        <Table
            data={levels}
            columns={columns}
            actions={actions}
            columnData={columnData}
            pagination={pagination}
            onPageChange={onPageChange}
            onDelete={actions.delete}
        />
    );
}

export default LevelsTable;
