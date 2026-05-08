import React from "react";
import { Link } from "react-router-dom";


const NewsCard = ({ headline, content, source, sourceLogo, time, img }) => {
  return (
    <Link
        to='/atal-kishan-yojana'
    >
      <article
        className="
            group bg-white 
            rounded-xl 
            border border-slate-200
            shadow-sm hover:shadow-md
            transition-all duration-200
            overflow-hidden"
      >
        <div className="h-44 w-full overflow-hidden">
          <img
            src={img}
            alt={headline}
            className="
                        w-full h-full object-cover
                        transistion-transform duration-300
                        group-hover:scale-105"
          />
        </div>

        <div className="p-4 flex flex-col gap-3">
          <h3 className="font-semibold text-base text-slate-900 leading-snug line-clamp-2">
            {headline}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-3">{content}</p>
          <div className="flex items-center justify-between pt-3 border-t text-xs text-slate-500">
            <div className="flex items-center gap-2">
              {sourceLogo && (
                <img
                  src={sourceLogo}
                  alt={source}
                  className="w-5 h-5 object-contain"
                />
              )}
              <span className="font-medium">{source}</span>
            </div>

            <span>{time}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
