import React from "react";
import { NavLink } from "react-router-dom";
// My components
import RadarChart from "../components/charts/RadarChart";
import CommonArea from "../components/areas/CommonArea";
// Hooks
import useGetTopFive from "../hooks/skills/useGetTopFive";

const Home = () => {
  const [topSkills, setTopSkills] = React.useState([]);

  const queryTopSkills = useGetTopFive();

  React.useEffect(() => {
    if (queryTopSkills.data) {
      setTopSkills(queryTopSkills.data.data);
    }
  }, [queryTopSkills.data]);

  return (
    <div className="w-full">
      <div className="flex flex-row h-full justify-center">
        <div className="w-full">
          <div className="h-[47%]">
            <CommonArea>
              <h1>1</h1>
            </CommonArea>
          </div>
          <div className="h-[48%] mt-[-20px]">
            <CommonArea>
              <h1>3</h1>
            </CommonArea>
          </div>
        </div>
        <div className="w-full  ">
          <CommonArea>
            <div className="items-center h-[98%]">
              <RadarChart data={topSkills} />
            </div>
            <div className="flex justify-end mt-[-10px]">
              <NavLink
                to={"/skills"}
                className="text-blue-600 hover:text-blue-800 hover:border-b border-blue-800"
              >
                {"See all skills >>"}
              </NavLink>
            </div>
          </CommonArea>
        </div>
      </div>
    </div>
  );
};

export default Home;
