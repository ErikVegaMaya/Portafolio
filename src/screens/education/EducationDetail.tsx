import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
// My components
import DetailArea from "../../components/areas/DetailArea";
import { EducationIcon } from "../../components/Icons";
import DeleteModal from "../../components/modals/DeleteModal";
// Hooks
import useSearchEducation from "../../hooks/education/useSearchEducation";

const EducationDetail = () => {
  const initialValues = {
    id: "",
    name: "",
    grade: "",
  };
  const [form, setForm] = React.useState(initialValues);
  const [education, setEducation]: any = React.useState({});
  const [showActions, setShowActions] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { id } = location.state;

  const educationQuery = useSearchEducation(id);

  React.useEffect(() => {
    if (educationQuery.data) {
      setEducation(educationQuery.data.data);
    }
  }, [educationQuery.data]);

  React.useEffect(() => {
    setForm({
      ...form,
      name: education.nameEdu,
      grade: education.gardeEdu,
    });
  }, [education]);

  const onEdit = () => {
    setIsEditing(true);
    setShowActions(!showActions);
  };

  const onPressDelete = () => {
    setIsActive(!isActive);
    setShowActions(!showActions);
  };

  const onCloseEdit = () => {
    setIsEditing(false);
    setForm({
      ...form,
      name: education.nameEdu,
      grade: education.gardeEdu,
    });
  };

  return (
    <DetailArea
      title="Institution"
      subtitle={education.nameEdu}
      bgColorIcon="#c026d3"
      icon={<EducationIcon />}
      onClick={() => setShowActions(!showActions)}
      onEdit={onEdit}
      onDelete={onPressDelete}
      onSubmit={() => {}}
      onCloseEdit={onCloseEdit}
      isShowingActions={showActions}
      isEditing={isEditing}
    >
      {isActive && (
        <DeleteModal
          onCancel={() => setIsActive(!isActive)}
          onContinue={() => {}}
        />
      )}

      <div className="flex flex-row justify-between mt-6">
        <div className="w-[48%]">
          <div className="text-xs">Institution name</div>
          {!isEditing ? (
            <div className="h-10 text-lg border-b pt-1 border-gray-300">
              {education.nameEdu}
            </div>
          ) : (
            <input
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              type="text"
              name="institution-name"
              placeholder="Enter"
              id="institution-name"
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            />
          )}
        </div>
        <div className="w-[48%]">
          <div className="text-xs">Education Grade</div>
          {!isEditing ? (
            <div className="h-10 text-lg border-b pt-1 border-gray-300">
              {education.gardeEdu}
            </div>
          ) : (
            <input
              value={form.grade}
              onChange={(event) =>
                setForm({ ...form, grade: event.target.value })
              }
              type="text"
              name="grade"
              placeholder="Enter"
              id="grade"
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            />
          )}
        </div>
      </div>
    </DetailArea>
  );
};

export default EducationDetail;
