"use client";
import React from "react";
import toast from "react-hot-toast";

const ShortURLDetails = ({ shortenUrl, loading }) => {
    // copy full shorten url to clipboard
    const handleCopyToClipboard = (url) => {
        navigator.clipboard.writeText(url);
        toast.success("Copied to clipboard");
    };

    return (
        <div className="py-5 bg-[#393b3e] p-5 w-full shadow rounded-lg">
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
                            <span
                                title="Click to copy to clipboard"
                                className="cursor-pointer text-slate-300 hover:underline"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleCopyToClipboard(shortenUrl);
                                }}
                                // href={`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${shortenUrl}`}
                            >
                                {`${shortenUrl}`}
                            </span>
                        </p>
                        <p className="" title="Click to copy to clipboard">
                            Full shorten URL {" => "}
                            <span
                                title="Click to copy to clipboard"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleCopyToClipboard(
                                        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${shortenUrl}`
                                    );
                                }}
                                className="cursor-pointer text-slate-300 hover:underline "
                            >
                                {`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${shortenUrl}`}
                            </span>
                        </p>
                    </div>
                    <a
                        href={`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${shortenUrl}`}
                        title="Open URL"
                        target="_blank"
                        className="cursor-pointer text-center min-w-[20%] bg-slate-400 px-2 py-1 rounded-lg active:opacity-40"
                    >
                        Open URL
                    </a>
                </div>
            )}
        </div>
    );
};

export default ShortURLDetails;
