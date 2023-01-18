import React from "react";
import ProgresBar from "../../components/ProgressBar";
import AddSkill from "./AddSkill";

const Skills = () => {
  const [hideProgramming, setIsHideProgramming] = React.useState(false);
  const [hideOther, setIsHideOther] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  const catchChange = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="w-screen h-full  ">
      <div className="relative flex justify-center h-full">
        <div className="bg-gray-100 border border-gray-500 rounded-lg w-[95%] h-[85%] my-2 py-2 px-4 ">
          {isActive && <AddSkill onClick={catchChange} />}
          <div className="w-[98%] flex justify-end">
            <button className="my-4" onClick={catchChange}>
              <h1 className="px-4 rounded bg-slate-700 text-white hover:bg-slate-800">
                New
              </h1>
            </button>
          </div>
          <div className="w-[98%] flex flex-row justify-between  h-8 bg-gray-600 text-white  py-1 px-10">
            <h1>Programming skills</h1>
            <button
              onClick={() => {
                setIsHideProgramming(!hideProgramming);
              }}
            >
              {hideProgramming ? (
                <h1 className="px-4 rounded hover:bg-slate-800">show</h1>
              ) : (
                <h1 className="px-4 rounded hover:bg-slate-800">hide</h1>
              )}
            </button>
          </div>
          {!hideProgramming && (
            <table className="w-[98%]">
              <thead>
                <tr className="text-left">
                  <th className="border-b border-gray-300 pl-3 w-[50%]">
                    Name
                  </th>
                  <th className="border-b border-gray-300 pl-3 w-[40%]">
                    Level
                  </th>
                  <th className="border-b border-gray-300 w-[10%]">I</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b pl-3  border-gray-300 w-[50%]">
                    hola
                  </td>
                  <td className="border-b  border-gray-300 w-[40%]">
                    <ProgresBar bgColor="red" progress="80" height={22} />
                  </td>
                  <td className="border-b  border-gray-300 w-[10%]">I</td>
                </tr>
              </tbody>
            </table>
          )}

          <div className="w-[98%]  flex flex-row justify-between mt-10 h-8 bg-gray-600 text-white py-1 px-10">
            <h1>Other skills</h1>
            <button
              onClick={() => {
                setIsHideOther(!hideOther);
              }}
            >
              {!hideOther ? (
                <h1 className="px-4 rounded hover:bg-slate-800">hide</h1>
              ) : (
                <h1 className="px-4 rounded hover:bg-slate-800">show</h1>
              )}
            </button>
          </div>
          {!hideOther && (
            <table className="w-[98%]">
              <thead>
                <tr className="text-left">
                  <th className="border-b pl-3 border-gray-300 w-[50%]">
                    Name
                  </th>
                  <th className="border-b border-gray-300 w-[40%]">Level</th>
                  <th className="border-b border-gray-300 w-[10%]">I</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b pl-3 border-gray-300 w-[50%]">
                    hola
                  </td>
                  <td className="border-b  border-gray-300 w-[40%]">hola 2</td>
                  <td className="border-b  border-gray-300 w-[10%]">I</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
