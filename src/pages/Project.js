import React from "react";
import Layout from "../components/Layout";
import { projectData } from "../project";

function Project() {
  return (
    <Layout>
      <div className="mt-20">
        <div className="h-screen bg-theme">
          <div className="h-3/4">
            <lottie-player
              src="https://assets7.lottiefiles.com/private_files/lf30_dgKoB3.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <p className="text-xl font-semibold  text-green-500 text-center px-12 md:p-0">
            Skill comes from the practice not the only practice but doing
            practice in right direction. So keep chasing your goal and one Day u
            will get your dream
          </p>
          <h1 className="text-6xl font-bold mt-5  text-center text-green-100 md:text-4xl  ">
            As{" "}
          </h1>
        </div>

        <div className="font-semibold text-center bg-orange-500 mx-20 my-4  p-20 text-white rounded-tl-full rounded-br-full md:mx-5  md:my-12">
          <h1 className="text-6xl md:text-3xl ">Life is too short.. </h1>
          <h1 className="text-6xl md:text-3xl ">to live.... </h1>
        </div>
      </div>

      <div className="grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5">
        {projectData.map((project) => {
          return (
            <div>
              <div className=" relative p-10 border-2 text-center rounded-tr-3xl border-green-200 shadow-xl">
                <img
                  src={project.image}
                  alt=""
                  className=" w-full h-52 text-center"
                />
                <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0  bg-black hover:opacity-80">
                  <h1 className="text-3xl text-green-700 font-semibold">
                    {project.title}
                  </h1>
                  <button className="border-2 mt-10 rounded text-white border-white py-2 px-10 hover:bg-green-600">
                    Demo
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Project;
