import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import API_URL_Axios from "../../Axios/Axios";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from "../../Redux/Slices/Favorites";
import { MoviesAction } from "../../Redux/Slices/Movies";


function Movies() {

    
    
    const theState = useSelector((state) => state)
    const FavOfID = theState.Favorite.Favorites.map((fav) => fav.id)
    const MoviesDispatch = theState.Movies.Movies.results
    
    
    
    //------------------------------------- the favorites==-----------------------------

    const Dispatch = useDispatch()
    const AddFavorite = (item) => {

        Dispatch(addToFavorites(item))
    }

    const toRemoveFavorite = (item) => {

        Dispatch(removeFromFavorites(item))
    }
    // .........................---------------------------.........................


    const [Movie, setMovie] = useState([]);

    const HandleChange = event => {
        setMessage(event.target.value)
        console.log(event.target.value)

    }
    // --------------==================pagination-------------====================

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1);
    async function toLoadPages() {
        try {

            const response = await API_URL_Axios.get(`https://api.themoviedb.org/3/movie/popular?&page=${page}`)
            setTotalPages(response.data.total_pages)
            setMovie(response.data.results)

        } catch {
            console.error("Error fetching movies:", error);

        }
    }

    // -----------------------------------search-------------------

    const [message, setMessage] = useState('')

    async function toGetMovies() {

        try {
            const Response = await API_URL_Axios.get(`/search/movie?query={${message}}`);

            setMovie(Response.data.results)

        } catch (error) {

            console.error("Error fetching movies:", error);

        }
    }




    useEffect(() => {

        Dispatch(MoviesAction())

    }, []);

    useEffect(() => {
        toGetMovies()
        // toFetchMovies()
      
    }, [message]);





    return (
        <>
            {/*  */}

            {/*  */}
            <div className="flex flex-wrap bg-gray-100">
                <div className="mb-10 justify-center items-center">
                    <div>
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input onChange={HandleChange} name="message" value={message} type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                        </div>
                        <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                </div>
                {MoviesDispatch.map((item) => (
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
                                        <Link to={`/MovieDetails/${item.id}`} key={item.id}>{item.title}</Link>


                                    </h2>
                                    <div
                                        className={`font-bold rounded-xl p-2 
                                                            ${Math.floor(
                                            item.vote_average
                                        ) < 5
                                                ? "bg-red-500"
                                                : Math.floor(
                                                    item.vote_average
                                                ) >= 5 &&
                                                    Math.floor(
                                                        item.vote_average
                                                    ) < 7
                                                    ? "bg-yellow-400"
                                                    : "bg-green-600"
                                            }`}
                                    >
                                        {Math.floor(item.vote_average)}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400"></div>
                                    <div className="text-lg text-gray-800">

                                        <div>{item.release_date.split("-")[0]}</div>{item.title}
                                    </div>
                                </div>
                                <p className="text-gray-400 max-h-40 overflow-y-hidden">
                                    {item.overview}
                                </p>
                                <div className="flex text-2xl font-bold text-a cursor-pointer">
                                    {FavOfID.includes(item.id) ? (
                                        <MdFavorite
                                            onClick={() => toRemoveFavorite(item)}
                                            className="text-red-600 transition duration-500 ease-in-out hover:text-red-700 focus-within:text-red-400 focus:bg-red-500"
                                        />
                                    ) : (
                                        <MdFavoriteBorder
                                            onClick={() => AddFavorite(item)}
                                            className="transition duration-500 ease-in-out hover:text-red-700"
                                        />
                                    )}


                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div >
            {/* -------------------- */}

            <div className="justify-center items-center place-content-center ml-96">
                <nav aria-label="Page navigation example ">
                    <ul className="flex items-center -space-x-px h-8 text-sm">
                        <li>
                            <button onClick={() => setPage(page - 1)} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Previous</span>
                                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setPage(page + 1)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Next</span>
                                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </button>
                        </li>
                        {page} of {totalPages}
                    </ul>
                </nav>
            </div>
            {/* < Pagination /> */}
        </>
    );
}

export default Movies;
