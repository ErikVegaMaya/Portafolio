import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SkillIcon, ArrowDownIcon } from "../../components/Icons";
// My components
import DeleteModal from "../../components/modals/DeleteModal";
// Hooks
import useSearchSkill from "../../hooks/skills/useSearchSkill";
import useUpdateSkill from "../../hooks/skills/useUpdateSkill";
import useDeleteSkill from "../../hooks/skills/useDeleteSkill";

const SkillDetail = () => {
  const initialValues = {
    id: "",
    name: "",
    type: "",
    level: "",
  };
  const [skill, setSkill]: any = React.useState({});
  const [showActions, setShowActions] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [form, setForm] = React.useState(initialValues);
  const [isActive, setIsActive] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = location.state;

  const skillQuery = useSearchSkill(id);
  const updateQuery = useUpdateSkill();
  const deleteQuery = useDeleteSkill();

  React.useEffect(() => {
    if (skillQuery.data) {
      setSkill(skillQuery.data.data);
    }
  }, [skillQuery.data]);

  React.useEffect(() => {
    setForm({
      ...form,
      id: id,
      name: skill.nameSkill,
      type: skill.typeSkill,
      level: skill.levelSkill,
    });
  }, [skill]);

  const onEdit = () => {
    setIsEditing(true);
    setShowActions(!showActions);
  };

  const onCloseEdit = () => {
    setIsEditing(false);
    setForm({
      ...form,
      name: skill.nameSkill,
      type: skill.typeSkill,
      level: skill.levelSkill,
    });
  };

  const onPressDelete = () => {
    setIsActive(!isActive);
    setShowActions(!showActions);
  };

  const onDelete = () => {
    setIsActive(!isActive);
    deleteQuery.mutate(id);
    // falta agregar condición solo cuando el delete es success
    navigate("/skills");
  };

  const onSubmit = () => {
    const data: any = {
      idSkill: form.id,
      nameSkill: form.name,
      typeSkill: form.type,
      levelSkill: form.level,
    };

    updateQuery.mutate(data, {
      onError: async (error: any) => {
        console.log("Error en el update");
        const requestErrors = error.response.data;
        console.log(requestErrors);
      },
    });
    onCloseEdit();
  };

  const catchChangeRadio = (value: string) => {
    setForm({ ...form, type: value.toString(), level: "" });
  };

  return (
    <div className="w-screen h-full">
      <div className="relative flex justify-center h-full">
        <div className="bg-gray-100 border border-gray-500 rounded-lg w-[95%] h-[85%] mt-4">
          {isActive && (
            <DeleteModal
              onCancel={() => setIsActive(!isActive)}
              onContinue={onDelete}
            />
          )}
          <div className="bg-slate-300 rounded-t-lg w-full">
            <div className=" px-4 py-2 flex flex-row justify-between w-full border-b border-slate-400">
              <div className="flex flex-row">
                <div className="flex justify-center items-center pt-1 w-[40px] h-[40px] bg-cyan-500 rounded-md">
                  <div className="text-white">
                    <SkillIcon />
                  </div>
                </div>
                <div className="ml-2">
                  <h1 className="text-xs">Skill</h1>
                  <h1 className="text-lg font-bold">{skill.nameSkill}</h1>
                </div>
              </div>
              <div>
                <button
                  name="actions"
                  id="actions"
                  className="px-4 py-1 flex justify-center rounded bg-slate-700 text-white hover:bg-slate-900"
                  onClick={() => setShowActions(!showActions)}
                >
                  <div className="mr-1">Actions</div>
                  <ArrowDownIcon />
                </button>
                {showActions && (
                  <div className="absolute flex flex-col bg-slate-700 mt-1 origin-top-right">
                    <button
                      className=" text-white my-1 py-1 hover:bg-slate-300 hover:text-slate-800"
                      id="edit"
                      onClick={onEdit}
                    >
                      <div className="px-8">Edit</div>
                    </button>
                    <button
                      className=" text-white mb-1 py-1 hover:bg-slate-300 hover:text-slate-800"
                      id="delete"
                      onClick={onPressDelete}
                    >
                      <div className="px-8">Delete</div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-6 mx-4 px-6">
            <div className="flex flex-row justify-between mt-6">
              <div className="w-[48%]">
                <div className="text-xs">Skill name</div>
                {!isEditing ? (
                  <div className="h-10 text-lg border-b pt-1 border-gray-300">
                    {skill.nameSkill}
                  </div>
                ) : (
                  <input
                    value={form.name}
                    onChange={(event) =>
                      setForm({ ...form, name: event.target.value })
                    }
                    type="text"
                    name="skill-name"
                    placeholder="Enter"
                    id="skill-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                )}
              </div>
              <div className="w-[48%]">
                <div className="text-xs">Skill level</div>
                {!isEditing ? (
                  <div className="h-10 text-lg border-b pt-1 border-gray-300">
                    {skill.levelSkill}
                    {skill.typeSkill === "1" && "%"}
                  </div>
                ) : (
                  <>
                    {form.type === "2" ? (
                      <input
                        value={form.level}
                        onChange={(event) =>
                          setForm({ ...form, level: event.target.value })
                        }
                        type="text"
                        name="skill-level"
                        placeholder="Enter"
                        id="skill-level"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                      />
                    ) : (
                      <input
                        value={form.level}
                        onChange={(event) =>
                          setForm({ ...form, level: event.target.value })
                        }
                        type="number"
                        min={0}
                        max={100}
                        name="skill-level"
                        placeholder="Enter"
                        id="skill-level"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                      />
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-row justify-between mt-6">
              <div className="w-[48%]">
                <div className="text-xs">Skill type</div>
                <div className="h-10 text-lg border-b pt-1 border-gray-300">
                  {!isEditing ? (
                    skill.typeSkill === "1" ? (
                      "Programming"
                    ) : (
                      "Other"
                    )
                  ) : (
                    <div className="flex flex-row mt-2 px-8">
                      <div className="flex flex-row">
                        <input
                          onClick={() => catchChangeRadio("1")}
                          type="radio"
                          name="skill-type"
                          id="skill-programing"
                          defaultChecked={form.type === "1"}
                        />
                        <label className="ml-3 text-sm font-medium text-gray-700">
                          Programming
                        </label>
                      </div>
                      <div className="flex flex-row ml-6">
                        <input
                          onClick={() => catchChangeRadio("2")}
                          type="radio"
                          name="skill-type"
                          id="skill-other"
                          defaultChecked={form.type === "2"}
                        />
                        <label className="ml-3 text-sm font-medium text-gray-700">
                          Other
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {isEditing && (
            <div className="bg-slate-300 absolute h-12 w-[94.85%] rounded-b top-[80%] flex flex-row items-center justify-center">
              <button
                onClick={onCloseEdit}
                className="border rounded-lg bg-slate-800 hover:bg-slate-600 px-4 py-1 mr-1 text-white"
              >
                Cancel
              </button>
              <button
                onClick={onSubmit}
                className="border rounded-lg bg-cyan-900 hover:bg-cyan-700 px-4 py-1 ml-1 text-white"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
