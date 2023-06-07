import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import {  FaBookmark } from "react-icons/fa";
import { useState } from "react";

const ViewDetails = () => {
  const singleData = useLoaderData();
  const {
    id,
    name,
    premiered,
    genres,
    status,
    image: { medium },
    summary,
    officialSite,
    rating,
  } = singleData;

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className=" lg:mx-20 rounded overflow-hidden shadow-2xl md:flex items-center gap-10 mt-10 p-5">
      <img className="lg:w-[40%]  lg:h-[90vh]" src={medium} alt={name} />
      <div className="lg:w-[50%]">
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-2">{name}</div>
          <hr className="border-2 border-black w-1/2 mb-4" />
          <div className="text-sm mb-4">
            <p className="text-gray-600">Premiered: {premiered}</p>
            <p className="text-gray-600">Genres: {genres.join(", ")}</p>
            <p className="text-gray-600">Status: {status}</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Average Rating: </span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {rating?.average}
            </span>
          </div>
        </div>
        <div className="px-6 pb-4">
          <div
            className="text-gray-700 text-base mb-4"
            dangerouslySetInnerHTML={{ __html: summary }}
          ></div>
          <a
            className="text-blue-500 hover:text-blue-700"
            href={officialSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Site
          </a>
          <div className="flex items-center justify-between">
            <button className="btn btn-primary block mt-10">
              <Link to="/">Back to Home</Link>
            </button>
            {isBookmarked ? (
              <FaBookmark
                className="text-3xl text-red-500 cursor-pointer"
                title="Bookmark Now"
                onClick={handleBookmark}
              />
            ) : (
              <Link to={`/bookmark/${id}`}>
                <button className="btn btn-accent mt-10">
                  {" "}
                  Book A Movie Ticket
                  
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
