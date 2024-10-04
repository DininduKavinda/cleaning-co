import React from "react";
import Table from "@/Components/Table";
import { deleteClient } from "@/Helpers/Api/ClientApi";

function ClientsTable({ clients, pagination, onPageChange }) {
    const columns = ["Id", "Name", "NIC","Roles","Email","City","Active","Action"];

    const columnData = ["id", "full_name","nic","roles.length > 0 ? client.roles.join(', ') : 'No Roles'" , "email","city.name_en","active ? 'Active' : 'Inactive'"];

    const actions = {
        show: "clients.show",
        delete: deleteClient,
    };

    return (
        <Table
            data={clients}
            columns={columns}
            actions={actions}
            columnData={columnData}
            pagination={pagination}
            onPageChange={onPageChange}
            onDelete={actions.delete}
        />
    );
}

export default ClientsTable;