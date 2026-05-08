import React from "react";

const TreadingNews = ({ views, heading, img, tags }) => {
    return (
        <article className="group rounded-2xl overflow-hidden border shadow-sm">

            <div className="aspect-[16/9] sm:aspect-[3/2]">
                <img
                    src={img}
                    alt={heading}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-sm text-slate-500">

                    <span className="flex items-center gap-1">
                        <i className="uil uil-eye" />
                        {views}
                    </span>

                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                </div>

                <h3 className="text-base sm:text-lg font-bold leading-snug">
                    {heading}
                </h3>
            </div>
        </article>
    );
};

export default TreadingNews;