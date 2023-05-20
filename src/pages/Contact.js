import React from "react";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <div>
        <div className="h-screen mt-10">
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_u25cckyh.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="w-full flex justify-center">
          <div className="md:w-full w-1/2 p-10 shadow-2xl bg-gray-50 ">
            <h1 className="font-bold text-2xl text-green-500">Contact me</h1>
            <input
              placeholder="Ur name..."
              type="text"
              className="w-full border-2 border-gray-300 shadow-lg rounded-md p-1 px-2 mt-5"
            />
            <input
              placeholder="Ur Email..."
              type="text"
              className="w-full border-2 border-gray-300 shadow-lg rounded-md p-1 px-2 mt-5"
            />
            <textarea
              placeholder="Ask me any questions..."
              type="text"
              className="w-full border-2 border-gray-300 shadow-lg rounded-md p-1 px-2 mt-5"
            />

            <button className="bg-green-500 text-white px-10 py-1 mt-3 rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
