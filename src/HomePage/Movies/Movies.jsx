import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

import "@smastrom/react-rating/style.css";

const Movies = ({ movie }) => {
  const { id, image, name, summary, language, genres,rating } = movie.show;
  const shortenedSummary = summary ? summary.slice(0, 100) + " ....." : "";

  console.log(movie);
  return (
    <div>
      <div className="card pt-6 md:w-96 w-full bg-base-100 shadow-2xl h-[100%]">
        <figure>
          <img src={image?.medium} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <div dangerouslySetInnerHTML={{ __html: shortenedSummary }}></div>
          <div>
            <span className="font-bold">Movie language:</span> {language}
          </div>
          <div className="flex items-center">
            <p className="font-bold">Genres : </p>
            <div className="card-actions justify-end mt-2">
              {genres[0] ? (
                <div className="badge badge-outline">{genres[0]}</div>
              ) : (
                <></>
              )}
              {genres[1] ? (
                <div className="badge badge-outline">{genres[1]}</div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="card-actions justify-between mt-[10%]">
            <div className="flex items-center gap-3">
              {
                rating.average 
                ? <> <Rating style={{ maxWidth: 140 }} value={4.5} readOnly />({rating?.average})</>
                : <></>
              }
            </div>

            <Link to={`/viewDetails/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
