import React from "react";

export default function Contact() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl text-center">
          Contact Us
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Reach out to the PACE Society members for any queries, suggestions, or
          assistance.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Satyam Gupta
            </h3>
            <p className="text-gray-600">Contact: 7983228557</p>
          </div>

          <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Gaurang Garg
            </h3>
            <p className="text-gray-600">Contact: 9351180347</p>
          </div>

          <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Ghanshyam Gupta
            </h3>
            <p className="text-gray-600">Contact: 8875080367</p>
          </div>

          <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Divyanshu Varshney
            </h3>
            <p className="text-gray-600">Website Handler: 8077925406</p>
          </div>

          <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Preet Sharma
            </h3>
            <p className="text-gray-600">Website Handler: 6006598194</p>
          </div>

          <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Vivek</h3>
            <p className="text-gray-600">Website Handler: 9417635287</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://chat.whatsapp.com/EQxKOUzJPJKFKlFf3TrCxy"
            className="inline-block bg-green-500 text-white py-2 px-6 rounded-full text-lg hover:bg-green-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Our WhatsApp Group
          </a>
        </div>
      </div>
    </section>
  );
}
