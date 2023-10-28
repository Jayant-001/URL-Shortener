"use client";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

const DeleteAllData = () => {

    // send a post request to `/api/clear-data` 
    const mutation = useMutation({
        mutationFn: async () => axios.get("/api/clear-data"),
        onSuccess: ({ data }) => {
            toast.success(data.message);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    const handleClick = (e) => {
        e.preventDefault();
        mutation.mutate();
    };

    return (
        <div className="fixed bottom-0 right-0 w-fit">
            <p className="text-[#202125]" onClick={handleClick}>
                Clear all data
            </p>
        </div>
    );
};

export default DeleteAllData;
