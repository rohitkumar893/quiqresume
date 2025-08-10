import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Create = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    education: "",
    skills: "",
    experience: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    navigate("/preview", { state: { formData } });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center gap-10 p-5">
        <div className="h-auto w-[390px] sm:w-[430px] flex-col gap-[30px] flex items-center justify-center rounded-[10px] shadow-xl bg-white p-5">
          <h1 className="text-[24px] font-medium">Fill your details</h1>
          <form className="flex flex-col gap-5" onSubmit={handleGenerate}>
            {[
              { id: "name", label: "Name", placeholder: "Full Name" },
              { id: "contact", label: "Contact", placeholder: "Contact Number" },
              { id: "email", label: "Email", placeholder: "E-mail" },
              { id: "education", label: "Education", placeholder: "Course, University, Year" },
              { id: "skills", label: "Skills", placeholder: "Separate by commas" },
              { id: "experience", label: "Experience", placeholder: "Roles, duration" },
              { id: "address", label: "Address", placeholder: "City, State" },
            ].map((field) => (
              <div key={field.id} className="flex items-center gap-2">
                <label htmlFor={field.id} className="w-32">{field.label}</label>
                <input
                  type="text"
                  id={field.id}
                  className="border w-48 px-[5px]"
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={handleChange}
                />
              </div>
            ))}
            <button
              type="submit"
              className="bg-sky-500 h-[40px] text-white mt-[8px] font-medium cursor-pointer"
            >
              GENERATE
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
