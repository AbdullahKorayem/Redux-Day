import React, { useEffect, useState } from 'react';
import { useParams, Link, redirectDocument, useLoaderData } from 'react-router-dom';

import API_URL_Axios from '../../../Axios/Axios';

function MovieDetails() {
    // const { id } = useParams();
    // const [MovieDetail, setMovieDetails] = useState('');
    // async function toGetDetails() {
    const MovieDetail = useLoaderData()
    //     try {
    //         const Response = await API_URL_Axios.get(`/movie/${id}`);
    //         console.log(Response.data);
    //         setMovieDetails(Response.data);
    //     } catch (error) {
    //         console.error("Error Fetching Movies Details", error);
    //     }

    // }
    useEffect(() => {

        // toGetDetails();
    }, []);
    // console.log(MovieDetail)

    return (<>
        <div className='flex justify-center  h-full items-center '>
            <div className="flex flex-wrap bg-gray-100  justify-center  items-center">
                <div
                    key={MovieDetail.id}
                    className="w-1/4 p-4 my-8 mx-05  transition duration-500 ease-in-out hover:scale-105"
                >
                    <div className="bg-white shadow-lg border-gray-100 max-h-80 border sm:rounded-3xl p-4 flex space-x-4">


                        <div className="h-48 overflow-visible w-1/2">
                            <img
                                className="rounded-3xl shadow-lg transition duration-500 ease-in-out hover:scale-105"
                                src={`https://image.tmdb.org/t/p/w1280${MovieDetail.poster_path}`}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col w-1/2 space-y-4">
                            <div className="flex justify-between items-start">
                                <h2 className="text-3xl font-bold">
                                    {MovieDetail.title}
                                </h2>
                                <div
                                    className={`font-bold rounded-xl p-2 
                                                            ${Math.floor(
                                        MovieDetail.vote_average
                                    ) < 5
                                            ? "bg-red-500"
                                            : Math.floor(
                                                MovieDetail.vote_average
                                            ) >= 5 &&
                                                Math.floor(
                                                    MovieDetail.vote_average
                                                ) < 7
                                                ? "bg-yellow-400"
                                                : "bg-green-600"
                                        }`}
                                >
                                    {Math.floor(MovieDetail.vote_average)}
                                </div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-400"></div>
                                <div className="text-lg text-gray-800">
                                    {MovieDetail.release_date}
                                </div>
                            </div>
                            <p className="text-gray-400 max-h-40 overflow-y-hidden">
                                {MovieDetail.overview}
                            </p>
                            <div className="flex text-2xl font-bold text-a">$83.90</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </>);
}

export default MovieDetails;


export const DetailsLoader = async (...arg) => {


    const Response = await API_URL_Axios.get(`/movie/${arg[0].params.id}`);

    return Response.data


}