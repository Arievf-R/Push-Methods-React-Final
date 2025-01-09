import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";
import logo from "../assets/page1.png";
import logo1 from "../assets/page2.png";
import logo2 from "../assets/page3.png";
import logo3 from "../assets/page4.png";

const Home = () => {
  return (
    <>
      <Main />
      <div className="p-8">
        <h1 className="mb-4 text-3xl font-bold text-white">Trending Now</h1>
        <div className="flex mb-4 space-x-4">
          <div className="relative">
            <select className="px-4 py-2 text-white bg-gray-800 rounded">
              <option>Indonesia</option>
            </select>
            <i className="absolute text-white fas fa-caret-down right-3 top-3"></i>
          </div>
          <div className="relative">
            <select className="px-4 py-2 text-white bg-gray-800 rounded">
              <option>Movies</option>
            </select>
            <i className="absolute text-white fas fa-caret-down right-3 top-3"></i>
          </div>
        </div>
      </div>
      <div className="px-8 space-y-8">
        <div className="flex flex-col space-y-4">
          <Row rowID="1" title="UpComing" fetchURL={requests.requestUpcoming} />
          <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
          <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
          <Row
            rowID="4"
            title="Top Rated"
            fetchURL={requests.requestTopRated}
          />
          <Row rowID="5" title="Horror" fetchURL={requests.requestHorror} />
        </div>
      </div>

      <div className="p-8">
        <h1 className="mb-6 text-2xl font-bold">More Reasons to Join</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex items-center justify-between p-6 rounded-lg bg-gradient-to-r from-purple-900 to-white">
            <div>
              <h2 className="mb-2 text-xl font-bold">Enjoy on your TV</h2>
              <p>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
            <img src={logo} alt="TV icon" className="w-12 h-12" />
          </div>
          <div className="flex items-center justify-between p-6 rounded-lg bg-gradient-to-r from-purple-900 to-white">
            <div>
              <h2 className="mb-2 text-xl font-bold">
                Download your shows to watch offline
              </h2>
              <p>
                Save your favorites easily and always have something to watch.
              </p>
            </div>
            <img src={logo1} alt="Download icon" className="w-12 h-12" />
          </div>
          <div className="flex items-center justify-between p-6 rounded-lg bg-gradient-to-r from-purple-900 to-white">
            <div>
              <h2 className="mb-2 text-xl font-bold">Watch everywhere</h2>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <img src={logo2} alt="Devices icon" className="w-12 h-12" />
          </div>
          <div className="flex items-center justify-between p-6 rounded-lg bg-gradient-to-r from-purple-900 to-white">
            <div>
              <h2 className="mb-2 text-xl font-bold">
                Create profiles for kids
              </h2>
              <p>
                Send kids on adventures with their favorite characters in a
                space made just for them — free with your membership.
              </p>
            </div>
            <img src={logo3} alt="Kids icon" className="w-12 h-12" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-8">
        <div className="w-full mb-8 text-center">
          <p className="mb-4 text-lg text-white">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex flex-col items-center w-full max-w-2xl mx-auto sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 mb-4 border border-gray-500 rounded sm:mb-0 sm:mr-4"
            />
            <button className="flex items-center justify-center w-full px-4 py-1 text-white bg-red-600 rounded sm:w-auto">
              Get Started <i className="ml-1 fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="w-full mb-8 text-center">
          <p className="text-lg text-white">
            Questions? Call{" "}
            <a href="tel:007-803-321-8275" className="underline">
              007-803-321-8275
            </a>
          </p>
        </div>
        <div className="grid w-full grid-cols-2 max-w-7xl gap-15text-center sm:grid-cols-4 sm:text-left">
          <div>
            <a href="#" className="block mb-2 text-white">
              FAQ
            </a>
            <a href="#" className="block mb-2 text-white">
              Investor Relations
            </a>
            <a href="#" className="block mb-2 text-white">
              Ways to Watch
            </a>
            <a href="#" className="block mb-2 text-white">
              Corporate Information
            </a>
            <a href="#" className="block mb-2 text-white">
              Only on Netflix
            </a>
          </div>
          <div>
            <a href="#" className="block mb-2 text-white">
              Help Center
            </a>
            <a href="#" className="block mb-2 text-white">
              Jobs
            </a>
            <a href="#" className="block mb-2 text-white">
              Terms of Use
            </a>
            <a href="#" className="block mb-2 text-white">
              Contact Us
            </a>
          </div>
          <div>
            <a href="#" className="block mb-2 text-white">
              Account
            </a>
            <a href="#" className="block mb-2 text-white">
              Redeem Gift Cards
            </a>
            <a href="#" className="block mb-2 text-white">
              Privacy
            </a>
            <a href="#" className="block mb-2 text-white">
              Speed Test
            </a>
          </div>
          <div>
            <a href="#" className="block mb-2 text-white">
              Media Center
            </a>
            <a href="#" className="block mb-2 text-white">
              Buy Gift Cards
            </a>
            <a href="#" className="block mb-2 text-white">
              Cookie Preferences
            </a>
            <a href="#" className="block mb-2 text-white">
              Legal Notices
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
