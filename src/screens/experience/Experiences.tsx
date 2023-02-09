import React from "react";
// My components
import CommonArea from "../../components/areas/CommonArea";
import AddButton from "../../components/buttons/AddButton";
import HideShowBar from "../../components/bars/HideShowBar";

const Experiences = () => {
  return (
    <CommonArea>
      <AddButton title="New" onClick={() => {}} />
      <HideShowBar title="Experiences" onClick={() => {}} isHidding={false} />
    </CommonArea>
  );
};

export default Experiences;
