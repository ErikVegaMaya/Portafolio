import React from "react";
import { CloseIcon } from "../../components/Icons";
// Hooks
import useSaveSkill from "../../hooks/skills/useSaveSkill";

const AddSkill = (props: any) => {
  const initialValues = {
    name: "",
    type: "",
    level: "",
  };
  const [form, setForm] = React.useState(initialValues);
  const [typeOfSkill, setTypeOfSkill] = React.useState("0");

  const addSkillQuery = useSaveSkill();

  const onSubmit = () => {
    console.log(form);
    const data = {
      NameSkill: form.name,
      TypeSkill: form.type,
      LevelSkill: form.level,
    };
    console.log(data);
    addSkillQuery.mutate(data, {
      onError: async (error: any) => {
        console.log("Error");
        const requestErrors = error.response.data;
        console.log(requestErrors);
      },
    });
    props.onClick();
  };

  const catchChangeRadio = (value: string) => {
    setTypeOfSkill(value);
    console.log(value);
    setForm({ ...form, type: value.toString(), level: "" });
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-60 transition-opacity">
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="flex flex-col w-2/4">
          <button
            onClick={props.onClick}
            className="text-white hover:border self-end hover:border-white rounded w-[26px] h-[26px] mb-1 text-center"
          >
            <CloseIcon />
          </button>
          <div className=" bg-white py-10 px-12">
            <h1 className="border-b self-center w-full text-center">
              New Skill
            </h1>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="skill-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
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
              </div>
              <div className="col-span-3 sm:col-span-3">
                <label
                  htmlFor="skill-type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Type
                </label>
                <div className="flex flex-row justify-between px-8">
                  <div className="flex flex-row">
                    <input
                      onClick={() => catchChangeRadio("1")}
                      type="radio"
                      name="skill-type"
                      id="skill-programing"
                    />
                    <label className="ml-3 text-sm font-medium text-gray-700">
                      Programming
                    </label>
                  </div>
                  <div className="flex flex-row">
                    <input
                      onClick={() => catchChangeRadio("2")}
                      type="radio"
                      name="skill-type"
                      id="skill-other"
                    />
                    <label className="ml-3 text-sm font-medium text-gray-700">
                      Other
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-3">
                <label
                  htmlFor="skill-level"
                  className="block text-sm font-medium text-gray-700"
                >
                  Level
                </label>
                {typeOfSkill === "2" ? (
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
              </div>
            </div>
            <div className="mt-6 flex flex-row items-center justify-center ">
              <button
                onClick={props.onClick}
                className="border rounded-lg bg-red-700 hover:bg-gray-900 px-4 py-1 mr-1 text-white"
              >
                Cancel
              </button>
              <button
                onClick={onSubmit}
                className="border rounded-lg bg-green-700 hover:bg-gray-900 px-4 py-1 ml-1 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSkill;
