'use client'
import React from "react";
import toast from "react-hot-toast";

const ShortURLDetails = ({ shortenUrl, loading }) => {
    
    const handleCopyToClipboard = (e) => {
        e.preventDefault();

        navigator.clipboard.writeText(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${shortenUrl}`
        );
        toast.success("Copied to clipboard");
    };

    return (
        <div className="py-4 bg-[#393b3e] p-5 w-full shadow rounded-lg">
            {loading && <p className="text-center text-lg">Loading...</p>}
            {shortenUrl && (
                <div className="flex gap-2 justify-center items-center">
                    <a
                        className="underline  text-blue-500"
                        target="_blank"
                        href={`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${shortenUrl}`}
                    >
                        {shortenUrl}
                    </a>
                    <button
                        className="cursor-pointer bg-slate-400 px-2 py-1 rounded-lg active:opacity-40 "
                        onClick={handleCopyToClipboard}
                    >
                        Copy
                    </button>
                </div>
            )}
        </div>
    );
};

export default ShortURLDetails;
