import React from "react";
import Layout from "../components/Layout";
import { projectData } from "../project";

function Courses() {
  return (
    <Layout>
      <div className="mt-20">
        <div className="h-screen  relative">
          <div className="h-3/4 bg-theme pt-20">
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_rqilnf3p.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="absolute left-0 right-0 -bottom-34">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#28282a"
                fill-opacity="1"
                d="M0,288L34.3,261.3C68.6,235,137,181,206,186.7C274.3,192,343,256,411,234.7C480,213,549,107,617,90.7C685.7,75,754,149,823,176C891.4,203,960,181,1029,165.3C1097.1,149,1166,139,1234,149.3C1302.9,160,1371,192,1406,208L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="mt-20 md:mt-5">
          <p className="text-xl font-semibold  text-gray-600 text-center px-12 md:p-0">
            Skill comes from the practice not the only practice but doing
            practice in right direction. So keep chasing your goal and one Day u
            will get your dream
          </p>
          <h1 className="text-6xl font-bold mt-5  text-center text-green-700 md:text-4xl  ">
            As{" "}
          </h1>
        </div>

        <div className="font-semibold text-center bg-orange-500 mx-20 my-4  p-20 text-white rounded-tl-full rounded-br-full md:mx-5  md:my-12">
          <h1 className="text-6xl md:text-3xl ">Life is too short.. </h1>
          <h1 className="text-6xl md:text-3xl ">to live.... </h1>
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
      </div>
    </Layout>
  );
}

export default Courses;
