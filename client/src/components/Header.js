import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-4 px-8  shadow">
      <div className="flex items-center">
        <h1 className="text-gray-100 text-lg font-bold">TaskSyncronize</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/register" className="text-gray-100">
              Register
            </a>
          </li>
          <li>
            <a href="/signin" className="text-gray-100">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
