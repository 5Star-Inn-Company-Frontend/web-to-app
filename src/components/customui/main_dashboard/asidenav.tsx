import React, { useState } from "react";

export const ResponsiveSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } transition-all duration-300 bg-gray-800 text-white p-4 overflow-hidden md:w-64 md:block absolute md:relative`}
      >
        <div className="flex justify-between items-center">
          <h1
            className={`${
              isOpen ? "text-lg" : "text-sm"
            } font-bold transition-all duration-300`}
          >
            Sidebar
          </h1>
          <button
            onClick={toggleSidebar}
            className="text-white p-2 focus:outline-none md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="mt-6">
          <ul>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2 2 4-4m0 0l4 4 2-2"
                  />
                </svg>
                {isOpen && <span>Home</span>}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {isOpen && <span>Settings</span>}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                {isOpen && <span>Dashboard</span>}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-6 ${
          isOpen ? "ml-64" : "ml-16"
        } transition-all duration-300`}
      >
        <h2 className="text-2xl font-bold">Main Content Area</h2>
        <p>
          Here is where your main content goes. On small screens, the sidebar
          will collapse, and the main content will take up the full width.
        </p>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
