import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
// My componets
import DetailArea from "../../components/areas/DetailArea";
import { WorkExperienceIcon } from "../../components/Icons";
import DeleteModal from "../../components/modals/DeleteModal";
// Hooks
import useSearchExperience from "../../hooks/experiences/useSearchExperience";

const ExperienceDetail = () => {
  const initialValues = {
    company: "",
    project: "",
    jobTitle: "",
    initDate: "",
    endDate: "",
    description: "",
  };

  const [form, setForm] = React.useState(initialValues);
  const [experience, setExperience]: any = React.useState({});
  const [showActions, setShowActions] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { id } = location.state;

  const experienceQuery = useSearchExperience(id);

  React.useEffect(() => {
    if (experienceQuery.data) {
      setExperience(experienceQuery.data.data);
    }
  }, [experienceQuery.data]);

  const onEdit = () => {
    setIsEditing(true);
    setShowActions(!showActions);
  };

  const onCloseEdit = () => {
    setIsEditing(false);
    setForm({
      ...form,
      project: experience.projectExp,
      company: experience.companyExp,
      jobTitle: experience.jobTitleExp,
      initDate: experience.initDateExp,
      endDate: experience.endDateExp,
      description: experience.descriptionExp,
    });
  };

  const onPressDelete = () => {
    setIsActive(!isActive);
    setShowActions(!showActions);
  };

  return (
    <DetailArea
      title="Experience"
      subtitle={experience.projectExp}
      icon={<WorkExperienceIcon />}
      bgColorIcon="#f97316"
      onClick={() => setShowActions(!showActions)}
      onCloseEdit={onCloseEdit}
      onDelete={onPressDelete}
      onEdit={onEdit}
      onSubmit={() => {}}
      isEditing={isEditing}
      isShowingActions={showActions}
    >
      {isActive && (
        <DeleteModal
          onCancel={() => {
            setIsActive(!isActive);
          }}
          onContinue={() => {}}
        />
      )}
      <div className="flex flex-row justify-between mt-6">
        <div className="w-[48%]">
          <div className="text-xs">Project name</div>
          {!isEditing ? (
            <div className="h-10 text-lg border-b pt-1 border-gray-300">
              {experience.projectExp}
            </div>
          ) : (
            <input
              value={form.project}
              onChange={(event) =>
                setForm({ ...form, project: event.target.value })
              }
              type="text"
              name="project-name"
              placeholder="Enter"
              id="project-name"
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            />
          )}
        </div>
        <div className="w-[48%]">
          <div className="text-xs">Company</div>
          {!isEditing ? (
            <div className="h-10 text-lg border-b pt-1 border-gray-300">
              {experience.companyExp}
            </div>
          ) : (
            <input
              value={form.company}
              onChange={(event) =>
                setForm({ ...form, company: event.target.value })
              }
              type="text"
              name="company"
              placeholder="Enter"
              id="company"
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            />
          )}
        </div>
      </div>
      <div className="flex flex-row justify-between mt-6">
        <div className="w-[48%]">
          <div className="text-xs">Job Title</div>
          {!isEditing ? (
            <div className="h-10 text-lg border-b pt-1 border-gray-300">
              {experience.jobTitleExp}
            </div>
          ) : (
            <input
              value={form.jobTitle}
              onChange={(event) =>
                setForm({ ...form, jobTitle: event.target.value })
              }
              type="text"
              name="job-title"
              placeholder="Enter"
              id="job-title"
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            />
          )}
        </div>
        <div className="w-[48%]">
          <div className="text-xs">Init date</div>
          {!isEditing ? (
            <div className="h-10 text-lg border-b pt-1 border-gray-300">
              {experience.initDateExp}
            </div>
          ) : (
            <input
              value={form.initDate}
              onChange={(event) =>
                setForm({ ...form, initDate: event.target.value })
              }
              type="date"
              name="init-date"
              placeholder="Enter"
              id="init-date"
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            />
          )}
        </div>
      </div>
      <div className="flex flex-row justify-between mt-6">
        <div className="w-[48%]">
          <div className="text-xs">End date</div>
          {!isEditing ? (
            <div className="h-10 text-lg border-b pt-1 border-gray-300">
              {experience.endDateExp}
            </div>
          ) : (
            <input
              value={form.endDate}
              onChange={(event) =>
                setForm({ ...form, endDate: event.target.value })
              }
              type="date"
              name="end-date"
              placeholder="Enter"
              id="end-date"
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            />
          )}
        </div>
      </div>
      <div className="flex flex-row justify-between mt-8">
        <div className="w-[48%]">
          <div className="text-xs">Description</div>
          {!isEditing ? (
            <div className=" text-lg border-b pt-1 border-gray-300">
              {experience.descriptionExp}
            </div>
          ) : (
            <textarea
              value={form.description}
              onChange={(event) =>
                setForm({ ...form, description: event.target.value })
              }
              name="description"
              placeholder="Enter"
              id="description"
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            />
          )}
        </div>
      </div>
    </DetailArea>
  );
};

export default ExperienceDetail;
