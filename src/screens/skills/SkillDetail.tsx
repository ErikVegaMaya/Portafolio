import React from "react";
import { useLocation } from "react-router-dom";

const SkillDetail = () => {
  const location = useLocation();
  const { id } = location.state;
  console.log(id);
  return (
    <div className="w-screen h-full  ">
      <div className="relative flex justify-center h-full">
        <div className="bg-gray-100 border border-gray-500 rounded-lg w-4/5 h-3/5  my-2 py-2 px-4 ">
          <h1>skill detail</h1>
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
