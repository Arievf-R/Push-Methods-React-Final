import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import logo from "../assets/page5.png";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //   console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[600px] text-white relative">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className="object-cover w-full h-full"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[50%] transform -translate-y-1/2 p-4 md:p-8 text-center">
          <h1 className="text-3xl font-bold md:text-5xl">{movie?.title}</h1>
          <div className="flex justify-center my-4">
            <button className="flex items-center px-5 py-2 text-white bg-red-600 border border-red-600 rounded-lg">
              <img src={logo} alt="Play icon" className="mr-2" />
              Play
            </button>
            <button className="px-5 py-2 ml-4 text-white border rounded-lg bg-purple border-purple">
              Watch Later
            </button>
          </div>
          <p className="text-sm text-gray-400">
            Released: {movie?.release_date}
          </p>
          <div className="flex justify-center mt-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-64 p-3 text-black rounded-l md:w-96"
            />
            <button className="px-4 py-3 text-white bg-red-600 rounded-r">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
