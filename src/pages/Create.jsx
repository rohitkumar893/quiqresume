import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Create = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    objective: "",
    education: "",
    skills: "",
    experience: "",
    address: "",
    hobbies: "",      // Added hobbies field
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
        <div className="h-auto w-[390px] sm:w-[430px] flex-col mt-[8px] gap-[25px] flex items-center justify-center rounded-[10px] shadow-xl bg-white p-5">
          <h1 className="text-[22px] font-medium">FILL YOUR DETAILS</h1>
          <h1 className="text-[16px] font-medium mt-[-15px] text-gray-600">Add "N/A" to non relevent fields </h1>
          <form className="flex flex-col gap-4" onSubmit={handleGenerate}>
            {[
              { id: "name", label: "Name", placeholder: "Full Name" },
              { id: "contact", label: "Contact", placeholder: "Contact Number" },
              { id: "email", label: "Email", placeholder: "E-mail" },
              { id: "objective", label: "Objective", placeholder: "Career Objective" },
              { id: "education", label: "Education", placeholder: "University, Year (Recent)" },
              { id: "skills", label: "Skills", placeholder: "Separate by commas" },
              { id: "experience", label: "Experience", placeholder: "Roles, duration (Recent)" },
              { id: "address", label: "Address", placeholder: "City, State" },
              { id: "hobbies", label: "Hobbies", placeholder: "Separate by commas" },
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
                  required
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
