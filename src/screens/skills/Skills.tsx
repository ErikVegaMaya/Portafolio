import React from "react";
import ProgresBar from "../../components/ProgressBar";
import AddSkill from "./AddSkill";
import { NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";
// Hooks
import useGetSkills from "../../hooks/skills/useGetSkills";
// My components
import { DeleteIcon } from "../../components/Icons";

const Skills = () => {
  const [hideProgramming, setIsHideProgramming] = React.useState(false);
  const [hideOther, setIsHideOther] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const [skills, setSkills] = React.useState([]);
  const [otherSkills, setOtherSkills] = React.useState([]);

  const skillsQuery = useGetSkills();

  const catchChange = () => {
    setIsActive(!isActive);
  };

  React.useEffect(() => {
    const programmingskills: any = [];
    const localotherSkills: any = [];
    if (skillsQuery.data) {
      skillsQuery.data.data.map((obj: any) => {
        obj.typeSkill === "1" && programmingskills.push(obj);
      });
      setSkills(programmingskills);

      skillsQuery.data.data.map((obj: any) => {
        obj.typeSkill === "2" && localotherSkills.push(obj);
      });
      setOtherSkills(localotherSkills);
    }
  }, [skillsQuery.data]);

  const itemsPerPage = 3;
  const [itemOffset, setItemOffset] = React.useState(0);
  const endOffset = itemOffset + itemsPerPage;
  //console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentSkillItems = skills.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(skills.length / itemsPerPage);

  console.log(currentSkillItems);
  console.log(pageCount);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % skills.length;
    /*   console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    ); */
    setItemOffset(newOffset);
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
          <div className="w-[98%] flex flex-row justify-between  h-8 bg-gray-600 text-white mb-4 py-1 px-10">
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
            <>
              <div className="min-h-[25%]">
                <table className="w-[98%]">
                  <thead>
                    <tr className="text-left">
                      <th className="border-b border-gray-300 pl-3 w-[50%]">
                        Name
                      </th>
                      <th className="border-b border-gray-300 w-[40%]">
                        Level
                      </th>
                      <th className="border-b border-gray-300 w-[10%]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentSkillItems.length > 0 &&
                      currentSkillItems.map((obj: any, index) => {
                        return (
                          obj !== null && (
                            <tr key={index} className="hover:bg-slate-300">
                              <td className="border-b pl-3 border-gray-300 w-[50%]">
                                <NavLink
                                  to="/skillDetail"
                                  state={{ id: obj.idSkill }}
                                  className="text-blue-600 hover:text-blue-800 hover:border-b border-blue-800"
                                >
                                  {obj.nameSkill}
                                </NavLink>
                              </td>
                              <td className="border-b border-gray-300 w-[40%]">
                                <ProgresBar
                                  bgColor="#c2410c"
                                  progress={obj.levelSkill}
                                  height={22}
                                />
                              </td>
                              <td className="border-b text-slate-800 border-gray-300 w-[10%]">
                                <button className="hover:text-red-600 ">
                                  <DeleteIcon />
                                </button>
                              </td>
                            </tr>
                          )
                        );
                      })}
                  </tbody>
                </table>
              </div>

              <div className="w-[98%] flex justify-end h-8 mt-1">
                <ReactPaginate
                  className="flex flex-row px-2 py-1 w-1/3 justify-end"
                  pageClassName=" text-base px-2 mx-1"
                  previousClassName="mr-10 text-base"
                  nextClassName="ml-10 text-base"
                  activeClassName="border border-slate-900 text-slate-900"
                  breakLabel="..."
                  nextLabel=" >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="< "
                />
              </div>
            </>
          )}

          <div className="w-[98%]  flex flex-row justify-between mt-3 mb-4 h-8 bg-gray-600 text-white py-1 px-10">
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
                  <th className="border-b border-gray-300 w-[10%]"></th>
                </tr>
              </thead>
              <tbody>
                {otherSkills.length > 0 &&
                  otherSkills.map((obj: any, index) => {
                    return (
                      obj !== null && (
                        <tr key={index} className="hover:bg-slate-300">
                          <td className="border-b pl-3  border-gray-300 w-[50%]">
                            <NavLink
                              to="/skillDetail"
                              state={{ id: obj.idSkill }}
                              className="text-blue-600 hover:text-blue-800 hover:border-b border-blue-800"
                            >
                              {obj.nameSkill}
                            </NavLink>
                          </td>
                          <td className="border-b  border-gray-300 w-[40%]">
                            {obj.levelSkill}
                          </td>
                          <td className="border-b text-slate-800 border-gray-300 w-[10%]">
                            <button
                              onClick={() => {}}
                              className="hover:text-red-600 "
                            >
                              <DeleteIcon />
                            </button>
                          </td>
                        </tr>
                      )
                    );
                  })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
