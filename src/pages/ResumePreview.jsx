import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const ResumePreview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  if (!formData) {
    navigate("/create");
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-start p-6 bg-gray-100 min-h-screen">
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-[600px] min-h-[800px]">

          {/* Header */}
          <div className="text-center border-b border-gray-300 pb-4 mb-6">
            <h1 className="text-3xl font-bold">{formData.name}</h1>
            <p className="text-gray-600 mt-1">
              {formData.contact} <span className="mx-2">•</span> {formData.email}
            </p>
          </div>

          {/* Objective */}
          {formData.objective && (
            <section className="mb-6">
              <h2 className="text-xl font-semibold border-b pb-1 border-gray-300">
                Objective
              </h2>
              <p className="mt-2">{formData.objective}</p>
            </section>
          )}

          {/* Education */}
          {formData.education && (
            <section className="mb-10">
              <h2 className="text-xl font-semibold border-b pb-1 border-gray-300">
                Education
              </h2>
              <p className="mt-2">{formData.education}</p>
            </section>
          )}

          {/* Skills */}
          {formData.skills && (
            <section className="mb-10">
              <h2 className="text-xl font-semibold border-b pb-1 border-gray-300">
                Skills
              </h2>
              <p className="mt-2">{formData.skills}</p>
            </section>
          )}

          {/* Experience */}
          {formData.experience && (
            <section className="mb-6">
              <h2 className="text-xl font-semibold border-b pb-1 border-gray-300">
                Experience
              </h2>
              <p className="mt-2">{formData.experience}</p>
            </section>
          )}

          {/* Address at bottom */}
          {formData.address && (
            <section className="mt-8 border-t border-gray-300 pt-4">
              <h2 className="text-xl font-semibold border-b pb-1 border-gray-300 mb-2">
                Address
              </h2>
              {formData.address.split(",").map((part, index) => (
                <p key={index} className="text-gray-600">
                  {part.trim()}
                </p>
              ))}
            </section>
          )}

          {/* Hobbies at the end with top border */}
          {formData.hobbies && (
            <section className="mt-8 pt-4 border-t border-gray-300 mb-4">
              <h2 className="text-xl font-semibold border-b pb-1 border-gray-300">
                Hobbies
              </h2>
              <p className="mt-2">{formData.hobbies}</p>
            </section>
          )}

        </div>
      </div>
    </>
  );
};

export default ResumePreview;
