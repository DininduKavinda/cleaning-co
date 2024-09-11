import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

const ClientDropdown = ({ clientId, setClientId }) => {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const TOKEN = localStorage.getItem("authToken");
    const HEADER = {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        },
    };

    useEffect(() => {
        if (clientId) {
            fetchInitialClient(clientId);
        }
    }, [clientId]);

    const fetchClients = async (inputValue) => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                `http://127.0.0.1:8000/api/web/clients?full_name[like]=${inputValue}`,
                HEADER
            );
            const clients = response.data.data.map((client) => ({
                value: client.id,
                label: client.full_name,
            }));

            setOptions((prevOptions) => {
                // Merge new clients with any existing options (to keep the selected client in the list)
                const updatedOptions = [
                    ...prevOptions,
                    ...clients.filter((client) =>
                        prevOptions.every((option) => option.value !== client.value)
                    ),
                ];
                return updatedOptions;
            });
        } catch (error) {
            console.error("Error fetching clients:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchInitialClient = async (id) => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                `http://127.0.0.1:8000/api/web/clients/${id}`,
                HEADER
            );
            const client = response.data.data;
            const initialClientOption = { value: client.id, label: client.full_name };

            setOptions((prevOptions) => {
                // Ensure the selected client is in the options
                if (!prevOptions.some((option) => option.value === client.id)) {
                    return [...prevOptions, initialClientOption];
                }
                return prevOptions;
            });
        } catch (error) {
            console.error("Error fetching initial client:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (inputValue) => {
        if (inputValue) {
            fetchClients(inputValue);
        } else {
            setOptions([]);
        }
    };

    const handleChange = (selectedOption) => {
        setClientId(selectedOption ? selectedOption.value : null);
    };

    return (
        <Select
            placeholder="Select Client"
            value={options.find((option) => option.value === clientId) || null}
            isLoading={isLoading}
            onInputChange={handleInputChange}
            options={options}
            onChange={handleChange}
            isClearable
            cacheOptions
        />
    );
};

export default ClientDropdown;
