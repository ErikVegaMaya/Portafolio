import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
// My componets
import DetailArea from "../../components/areas/DetailArea";
import { WorkExperienceIcon } from "../../components/Icons";
// Hooks
import useSearchExperience from "../../hooks/experiences/useSearchExperience";

const ExperienceDetail = () => {
  const [experience, setExperience]: any = React.useState({});
  const [showActions, setShowActions] = React.useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { id } = location.state;

  const experienceQuery = useSearchExperience(id);

  React.useEffect(() => {
    if (experienceQuery.data) {
      setExperience(experienceQuery.data.data);
    }
  }, [experienceQuery.data]);

  return (
    <DetailArea
      title="Experience"
      subtitle={experience.projectExp}
      icon={<WorkExperienceIcon />}
      bgColorIcon="orange"
      onClick={() => setShowActions(!showActions)}
      onCloseEdit={() => {}}
      onDelete={() => {}}
      onEdit={() => {}}
      onSubmit={() => {}}
      isEditing={false}
      isShowingActions={showActions}
    >
      <h1>Detail</h1>
    </DetailArea>
  );
};

export default ExperienceDetail;
