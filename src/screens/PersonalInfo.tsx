import React from "react";
import ProfileImg from "../assets/foto.jpg";
import gitIcon from "../assets/git.png";
import linkedinIcon from "../assets/linkedin.png";

const PersonalInfo = () => {
  return (
    <div className="w-screen h-full ">
      <div className="relative flex justify-center h-full">
        <div className="bg-gray-100 border border-gray-500 rounded-lg w-4/5 h-3/5 my-8 py-2 px-4 ">
          <div className="flex flex-row  pt-8">
            <div className="w-1/5 h-52">
              <img className="rounded-lg" src={ProfileImg} />
            </div>
            <div className="w-2/3 px-10">
              <div>Name</div>
              <div className="h-10 rounded-lg border border-gray-500"></div>
              <div className="mt-2">Phone</div>
              <div className="h-10 rounded-lg border border-gray-500"></div>
              <div className="mt-2">Email</div>
              <div className="h-10 rounded-lg border border-gray-500"></div>
              <div className="flex flex-row justify-between">
                <button
                  type="button"
                  className="w-[48%] flex flex-row justify-center items-center h-8 mt-4 rounded-md bg-gradient-to-r from-gray-600 to-gray-800"
                >
                  <div className="w-7 h-8 mt-1">
                    <img src={gitIcon} />
                  </div>
                  <h3 className="text-white">Github</h3>
                </button>
                <button
                  type="button"
                  className="w-[48%] h-8 mt-4 flex flex-row justify-center items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500"
                >
                  <div className="w-7 h-8 mt-1">
                    <img src={linkedinIcon} />
                  </div>
                  <h3 className="">Linkedin</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
