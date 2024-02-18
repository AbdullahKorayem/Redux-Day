import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { addToFavorites, removeFromFavorites } from "../../Redux/Slices/Favorites";


function Favorites() {
  const [love, setLove] = useState(true);
  const [FavMovies, setFavMovies] = useState([]);
  const dispatch = useDispatch();
  const theState = useSelector((state) => state);
  const theHoleArray = theState.Favorite.Favorites;

  const theHoleArrayLength = theHoleArray.length;

  const AddFavorite = (item) => {
    setLove(!love);
    dispatch(addToFavorites(item));
  };

  const toRemoveFavorite = (item) => {
    
    setLove(!love);
    dispatch(removeFromFavorites(item));
  };

  return (
    <>
      <div className="flex flex-wrap bg-gray-100">
        {theHoleArrayLength}
        {theHoleArray.length === 0 ? (
          <div className="text-center w-full p-8">
            No favorites added. Add some to your favorites!
          </div>
        ) : (
          theHoleArray.map((item) => (
            <div
              key={item.id}
              className="w-1/4 p-4 my-8 mx-05  transition duration-500 ease-in-out hover:scale-105"
            >
              <div className="bg-white shadow-lg border-gray-100 max-h-80 border sm:rounded-3xl p-4 flex space-x-4">
                <div className="h-48 overflow-visible w-1/2">
                  <img
                    className="rounded-3xl shadow-lg transition duration-500 ease-in-out hover:scale-105"
                    src={`https://image.tmdb.org/t/p/w1280${item.poster_path}`}
                    alt=""
                  />
                </div>
                <div className="flex flex-col w-1/2 space-y-4">
                  <div className="flex justify-between items-start">
                    <h2 className="text-3xl font-bold">
                      <Link to={`/MovieDetails/${item.id}`} key={item.id}>
                        {item.title}
                      </Link>
                    </h2>
                    <div
                      className={`font-bold rounded-xl p-2 
                                                            ${Math.floor(
                        item.vote_average
                      ) < 5
                          ? 'bg-red-500'
                          : Math.floor(item.vote_average) >= 5 &&
                            Math.floor(item.vote_average) < 7
                            ? 'bg-yellow-400'
                            : 'bg-green-600'
                        }`}
                    >
                      {Math.floor(item.vote_average)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400"></div>
                    <div className="text-lg text-gray-800">
                      <div>{item.release_date.split('-')[0]}</div>
                      {item.title}
                    </div>
                  </div>
                  <p className="text-gray-400 max-h-40 overflow-y-hidden">
                    {item.overview}
                  </p>
                  <div className="flex text-2xl font-bold text-a ">
                    {love ? (
                      <MdFavoriteBorder
                        onClick={() => AddFavorite(item)}
                        className="hover:text-red-600"
                      />
                    ) : (
                      <MdFavorite
                        onClick={() => toRemoveFavorite(item)}
                        className="hover:bg-red-500"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Favorites;
