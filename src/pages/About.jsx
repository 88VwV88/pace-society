import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl text-center">About PACE Society</h2>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
          PACE (Programming and Computing Enthusiasts) Society is the official society of the Computer Science Department at NIT Jalandhar. We are dedicated to enhancing the technical skills, professional development, and overall growth of our students.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Skill Development</h3>
            <p className="text-gray-600">
              Regular workshops, hackathons, and coding competitions to enhance programming and problem-solving skills.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">One To One Interaction</h3>
            <p className="text-gray-600">
              Guest lectures, webinars, and seminars from seniors and department professors to  keep students updated with the latest technology.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Collaborative Projects</h3>
            <p className="text-gray-600">
              Opportunities to work on real-life projects and collaborations that foster teamwork and innovation.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Peer Learning</h3>
            <p className="text-gray-600">
              A strong community where peers learn and grow together through knowledge sharing and mentoring.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Leadership Opportunities</h3>
            <p className="text-gray-600">
              Roles and responsibilities that help students develop leadership and management skills.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Networking Events</h3>
            <p className="text-gray-600">
              Events and sessions that help students connect with alumni and professionals from the tech industry.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a href="https://www.instagram.com/pace.nitj?utm_source=qr&igsh=cTE4dTZ1ZWNrYnkx" className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700">
            Join Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
