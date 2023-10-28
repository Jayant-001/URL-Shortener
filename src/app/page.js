"use client";
import ShortURLDetails from "@/components/ShortURLDetails";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

export default function Home() {
    const [url, setUrl] = useState("");
    const [shortenUrl, setShortenUrl] = useState("");

    // Post request - `/api/url` body - {url} to get shorten id of long URL
    const mutation = useMutation({
        mutationFn: async () => axios.post("/api/url", { url }),
        onSuccess: ({ data }) => {
            setShortenUrl(data.shortenURL.shortId);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (url.length < 5) {
            toast.error("Invalid url");
            return;
        }

        mutation.mutate();
    };

    return (
        <div className="w-screen py-10 px-[10%] sm:px-[20%] bg-[#202125] h-screen flex flex-col gap-5 justify-center items-center">
            <div>
                <h1 className="text-lg sm:text-xl md:text-3xl">
                    Welcome to <strong className="text-red-500">URL</strong>{" "}
                    Shortener
                </h1>
            </div>
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
                        placeholder="Enter long URL"
                    />
                    <input
                        type="submit"
                        className="cursor-pointer bg-slate-400 sm:rounded-r-lg px-2 py-2 hover:opacity-60 "
                        value="Shorten URL"
                    />
                </form>
            </div>
            <ShortURLDetails
                shortenUrl={shortenUrl}
                loading={mutation.isLoading}
            />
            <Link
                href="/analytics"
                className="text-lg hover:underline hover:opacity-60"
            >
                Get your <span className="font-semibold underline ">URL</span> analytics
            </Link>
            <div>
                <hr />  
                <p className="text-sm sm:text-base">
                    Designed and Developed by{" "}
                    <a href="https://jayant-gupta.vercel.app/" target="_blank">
                        <strong className="text-blue-500 hover:underline">
                            Jayant
                        </strong>
                    </a>
                </p>
                <p className="text-sm sm:text-base">
                    Get it on <a
                        href="https://github.com/Jayant-001/URL-Shortener"
                        target="_blank"
                    >
                        <strong className="text-blue-500 hover:underline">
                            Github
                        </strong>
                    </a> Connect with me on{" "}
                    <a
                        href="https://www.linkedin.com/in/jayant-cse/"
                        target="_blank"
                    >
                        <strong className="text-blue-500 hover:underline">
                            LinkedIn
                        </strong>
                    </a>
                </p>
            </div>
        </div>
    );
}
