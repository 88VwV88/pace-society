import React from "react";
import photo from "../assets/jagdeep.jpg"
import photo1 from "../assets/nagendra.jpg"
import photo2 from "../assets/renu.jpg"

const Team = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl text-center">
          Co-ordinators
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-md rounded-lg flex p-6">
            <div className="flex-shrink-0">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src={photo}
                alt="Skill Development"
              />
            </div>
            <div className="ml-4 text-left">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Dr Rajneesh Rani
              </h3>
              <p className="text-gray-600">
              Assistant Professor (Grade-II)
Department of Computer Science and Engineering

Dr B R Ambedkar National Institute of Technology, Jalandhar
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg flex p-6">
            <div className="flex-shrink-0">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src={photo1}
                alt="One To One Interaction"
              />
            </div>
            <div className="ml-4 text-left">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
               Dr Nagendra Pratap Singh
              </h3>
              <p className="text-gray-600">
              Assistant Professor (Grade-I)
Department of Computer Science and Engineering

Dr B R Ambedkar National Institute of Technology, Jalandhar
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg flex p-6">
            <div className="flex-shrink-0">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src={photo2}
                alt="Collaborative Projects"
              />
            </div>
            <div className="ml-4 text-left">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
               Dr Renu Dhir
              </h3>
              <p className="text-gray-600">
              Associate Professor
Department of Computer Science and Engineering

Dr B R Ambedkar National Institute of Technology, Jalandhar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
