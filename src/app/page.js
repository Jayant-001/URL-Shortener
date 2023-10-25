"use client";
import ShortURLDetails from "@/components/ShortURLDetails";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

export default function Home() {
    const [url, setUrl] = useState("");
    const [shortenUrl, setShortenUrl] = useState("");

    const mutation = useMutation({
        mutationFn: async () => axios.post("/api/url", { url }),
        onSuccess: ({ data }) => {
            setShortenUrl(data.shortenURL.shortId);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (url.length < 3) {
            toast.error("Invalid url");
            return;
        }

        mutation.mutate();
    };

    return (
        <div className="w-screen py-10 px-[10%] sm:px-[20%] bg-[#202125] h-screen flex flex-col gap-5 justify-center items-center">
            <div className="shadow rounded-lg w-full py-10  bg-[#393b3e] p-5">
                <form
                    className="flex gap-5 sm:gap-0 flex-col sm:flex-row"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        className="pl-4 pr-2 text-lg py-2 rounded-l-lg flex-grow bg-[#202125] text-white outline-none border-none"
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                        placeholder="Enter url"
                    />
                    <input
                        type="submit"
                        className="cursor-pointer bg-slate-400 md:rounded-r-lg px-2 py-2 "
                        value="Shorten URL"
                    />
                </form>
            </div>
            <ShortURLDetails
                shortenUrl={shortenUrl}
                loading={mutation.isLoading}
            />
        </div>
    );
}
