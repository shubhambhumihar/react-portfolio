import React from "react";
import Layout from "../components/Layout";
import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJava,
  FaJsfiddle,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

function Home() {
  return (
    <Layout>
      <div>
        {/* intro section */}
        <div className="min-h-screen bg-theme">
          <div className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 bg-theme border-rose-900 transform rotate-12 md:rotate-0 md:border-0 mx-20 ">
            <div className="h-1/2 md:h-auto">
              <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_4qiecwbu.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="font-bold text-yellow-700 md:px-5">
              <h1 className="text-7xl md:text-4xl">
                Hi, I'm <b className="text-emerald-600">Shubham</b>
              </h1>
              <h2>
                Full Stack{" "}
                <b className="text-orange-600 md:text-xl">Developer </b> and
                Designer
              </h2>
            </div>
          </div>
        </div>

        {/* technologies */}
        <div className="mt-20">
          <h1 className="text-4xl text-blue-800 font-bold text-center my-8">
            Technologies I use
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-4">
            <FaReact
              size={180}
              color="cyan"
              className="w-full text-center mt-20 animate-spin"
            />
            <FaHtml5
              size={180}
              color="orange"
              className="w-full text-center mt-20 "
            />
            <FaAngular
              size={180}
              color="tomato"
              className="w-full text-center mt-20  animate-bounce"
            />

            <FaNodeJs
              size={180}
              color="green"
              className="w-full text-center mt-20 "
            />
            <FaBootstrap
              size={180}
              color="blue"
              className="w-full text-center mt-20"
            />
            <FaJsfiddle
              size={180}
              color="green"
              className="w-full text-center mt-20  animate-bounce"
            />
            <FaJava
              size={180}
              color="red"
              className="w-full text-center mt-20 "
            />

            <FaCss3
              size={180}
              color="orangeRed"
              className="w-full text-center mt-20  animate-bounce"
            />
          </div>
        </div>

        {/* js buff */}
        <div className="my-20  ">
          <div className="text-center h-52 shadow-2xl bg-primary ">
            <h1 className="text-white py-10 font-bold text-4xl">
              I love doing REACT,U heard it right!
            </h1>
          </div>

          <div className="md:mx-5 mx-32 bg-green-300 shadow-2xl -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96">
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_3ntisyac.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <p className="text-xl my-5 font-semibold md:px-5 px-14 py-10">
              I love doing React since it has been become popular now-a-days so
              i love doing this.. And one more advantage is that its easy to
              learn..!!
            </p>
          </div>
        </div>

        {/* devv tech  */}
        <div className="my-20  ">
          <div className="text-center h-52 shadow-2xl bg-secondary ">
            <h1 className="text-white py-10 font-bold text-4xl">
              Dev Stack i have used
            </h1>
          </div>

          <div className="md:mx-5 mx-32 bg-green-300 shadow-2xl -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96">
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_jtbfg2nb.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="grid md:grid-cols-1 grid-cols-3 p-5">
              <div className="">
                <h1 className="font-bold text-xl">Frontend</h1>
                <hr />
                <p className="font-semibold my-2">HTML/CSS</p>
                <p className="font-semibold my-2">React</p>
                <p className="font-semibold my-2">Javascript</p>
                <p className="font-semibold my-2">Angular</p>
                <p className="font-semibold my-2">Redux</p>
              </div>
              <div className="text-center">
                <h1 className="font-bold text-xl">Backend and DB</h1>
                <hr />
                <p className="font-semibold my-2">Node JS</p>
                <p className="font-semibold my-2">MySQL</p>
                <p className="font-semibold my-2">Javascript</p>
                <p className="font-semibold my-2">Express JS</p>
                <p className="font-semibold my-2">MongoDb</p>
              </div>
              <div className="text-right">
                <h1 className="font-bold text-xl">UI/UX</h1>
                <hr />
                <p className="font-semibold my-2">Bootstrap</p>
                <p className="font-semibold my-2">Tailwind</p>
                <p className="font-semibold my-2">Material UI</p>
                <p className="font-semibold my-2">CSS Magic</p>
                <p className="font-semibold my-2">Semantic UI</p>
              </div>
            </div>
          </div>
        </div>

        {/* dev info */}
        {/* <div>
          <h1 className="text-gray-700 text-center text-4xl font-bold">
            Who is Shubham
          </h1>
        </div> */}

        <div>
          <h1 className="text-gray-700 text-center text-3xl font-bold">
            Who is Shubham
          </h1>
          <div className="h-screen relative">
            <div className="h-full">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_uchndyff.json"
                background="transparent"
                speed="2"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="absolute inset-0 flex flex-col font-mont font-semibold items-center justify-center">
              <h1 className="text-2xl text-orange-800 font-bold text-left  ">
                Hey there people
                <hr />
                <pre className="text-xl my-5 font-mont font-semibold md:text-sm">
                  {JSON.stringify(
                    {
                      name: "Shubham Kumar Singh",
                      age: "21",
                      gender: "male",
                      country: "India",
                    },
                    null,
                    2
                  )}
                </pre>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
