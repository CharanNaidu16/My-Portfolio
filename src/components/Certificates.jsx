import React from "react";
import mongodb from "../assets/charan mongodbcert (1).pdf";
import reactCert from "../assets/share-certificate.png";

const Certificates = () => {
  return (
    <div
      id="certificates"
      className="p-6 md:p-10 lg:p-24 bg-gray-900 bg-opacity-80 rounded-lg"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-6 text-center">
        Certificates
      </h1>
      <ul className="space-y-4">
        <li className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-white">
            React and Redux Certificate
          </h4>
          <p className="text-gray-400">
            Aug 2024{" "}
            <a
              href={reactCert}
              download
              className="text-blue-400 hover:text-blue-300 transition duration-200"
            >
              Credentials
            </a>
          </p>
        </li>
        <li className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-white">MongoDB</h4>
          <p className="text-gray-400">
            March 2024{" "}
            <a
              href={mongodb}
              download
              className="text-blue-400 hover:text-blue-300 transition duration-200"
            >
              Credentials
            </a>
          </p>
        </li>
        <li className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-white">
            NPTEL DBMS and SQL
          </h4>
          <p className="text-gray-400">
            Aug 2024{" "}
            <a
              href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS41S2422117203036389"
              className="text-blue-400 hover:text-blue-300 transition duration-200"
            >
              Credentials
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Certificates;
