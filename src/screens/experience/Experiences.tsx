import React from "react";
// My components
import CommonArea from "../../components/areas/CommonArea";
import AddButton from "../../components/buttons/AddButton";
import HideShowBar from "../../components/bars/HideShowBar";
import AddExperience from "./AddExperience";
import ExperienceList from "../../components/listas/ExperienceList";
// Hooks
import useGetExperiences from "../../hooks/experiences/useGetExperiences";

const Experiences = () => {
  const [experiences, setExperiences] = React.useState([]);
  const [isActive, setIsActive] = React.useState(false);
  const [isHide, setIsHide] = React.useState(false);

  const experiencesQuery = useGetExperiences();

  const headersLists = [
    { name: "Project", size: "20%" },
    { name: "Company", size: "17%" },
    { name: "Job Title", size: "20%" },
    { name: "Init Date", size: "17%" },
    { name: "End Date", size: "17%" },
    { name: "", size: "5%" },
  ];

  React.useEffect(() => {
    if (experiencesQuery.data) {
      console.log(experiencesQuery.data.data);
      setExperiences(experiencesQuery.data.data);
    }
  }, [experiencesQuery.data]);

  const onPressDelete = (id: string) => {
    console.log(id);
  };

  return (
    <CommonArea>
      {isActive && <AddExperience onClick={() => setIsActive(!isActive)} />}
      <AddButton title="New" onClick={() => setIsActive(!isActive)} />
      <HideShowBar
        title="Experiences"
        onClick={() => setIsHide(!isHide)}
        isHidding={isHide}
      />
      {!isHide && (
        <ExperienceList
          headers={headersLists}
          rows={experiences}
          onPressDelete={onPressDelete}
          toRedirect="/"
        />
      )}
    </CommonArea>
  );
};

export default Experiences;
