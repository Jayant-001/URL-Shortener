"use client";
import React from "react";
import toast from "react-hot-toast";

const ShortURLDetails = ({ shortenUrl, loading }) => {

    // copy full shorten url to clipboard
    const handleCopyToClipboard = (e) => {
        e.preventDefault();

        navigator.clipboard.writeText(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${shortenUrl}`
        );
        toast.success("Copied to clipboard");
    };

    return (
        <div className="py-4 bg-[#393b3e] p-5 w-full shadow rounded-lg">
            {loading && (
                <p className="text-center text-lg my-2">
                    Shorting your URL. Please wait...
                </p>
            )}
            {shortenUrl && (
                <div className="flex gap-3 justify-center items-center flex-col">
                    <div className="space-y-3 ">
                        <p>
                            Your shorten key {" => "}
                            <a
                                className="  text-slate-300 hover:underline"
                                target="_blank"
                                href={`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${shortenUrl}`}
                            >
                                {`${shortenUrl}`}
                            </a>
                        </p>
                        <p>
                            Full shorten URL {" => "}
                            <a
                                className="   text-slate-300 hover:underline "
                                target="_blank"
                                href={`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${shortenUrl}`}
                            >
                                {`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${shortenUrl}`}
                            </a>
                        </p>
                    </div>
                    <button
                        title="Copy full short URL"
                        className="cursor-pointer min-w-[20%] bg-slate-400 px-2 py-1 rounded-lg active:opacity-40 "
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
