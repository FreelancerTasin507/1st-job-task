import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Movies from "../Movies/Movies";

const Home = () => {
  const [showAll, setShowAll] = useState(false);

  const handleSeeMore = () => {
    setShowAll(!showAll);
  };

  const moviesData = useLoaderData();
  console.log(moviesData);

  const filteredMovies = showAll ? moviesData : moviesData.slice(0, 6);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-20 mx-3 gap-10 mt-20">
      {filteredMovies.map((movie) => (
        <Movies key={movie.id} movie={movie} />
      ))}
      {!showAll && (
        <div className="flex mt-5  ">
          <button
            className="btn btn-primary "
            onClick={handleSeeMore}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
