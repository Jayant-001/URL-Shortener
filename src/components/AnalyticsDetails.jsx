import Link from "next/link";

const AnalyticsDetails = ({ analytics, loading }) => {
    return (
        <div className="py-4 bg-[#393b3e] p-5 w-full shadow rounded-lg">
            {loading && (
                <p className="text-center text-lg">
                    Getting details. Please wait...
                </p>
            )}
            {analytics && (
                <div className="flex gap-3 justify-center  flex-col">
                    <p className="text-lg md:text-xl font-semibold">
                        Total clicks : {analytics.visitedHistory.length}
                    </p>
                    <a
                        className="   text-slate-300 hover:underline "
                        target="_blank"
                        href={`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${analytics.shortId}`}
                    >
                        {`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${analytics.shortId}`}
                    </a>
                    <p className="text-lg md:text-xl font-bold">
                        Clicks timing
                    </p>
                    <div className="space-y-3 ">
                        {analytics.visitedHistory.map((analytic) => (
                            <p key={analytic._id}>
                                {new Date(
                                    Number.parseInt(analytic.timeStamp)
                                ).toLocaleString()}{" "}
                            </p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnalyticsDetails;
