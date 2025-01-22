import React, { useState } from "react";
import Note from "/NoteBlank.png";
import Download from "/Download.png";
import UserGroup from "/classs.png";
import Settings from "/Setting.png";
import Recordings from "/Recordings.png";
import Discussions from "/Discussions.png";
import Graduation from "/Graduation.png";
import Resource from "/Resource.png";
import Calendar from "/calendar.png";
import DashIcon from "/Dash.png";
import Assignment from "/assignment.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const Sidebar_Link = [
    { id: 1, path: "/", name: "Dashboard", icon: DashIcon },
    { id: 2, path: "/assignments", name: "Assignments", icon: Assignment },
    { id: 3, path: "/schedule", name: "Schedule", icon: Calendar },
    { id: 4, path: "/recordings", name: "Recordings", icon: Recordings },
    { id: 5, path: "/discussions", name: "Discussions", icon: Discussions },
    { id: 6, path: "/resources", name: "Resources", icon: Resource },
    { id: 7, path: "/notes", name: "Notes", icon: Note },
    { id: 8, path: "/downloads", name: "Downloads", icon: Download },
    { id: 9, path: "/classes", name: "Classes", icon: UserGroup },
    { id: 10, path: "/courses", name: "Courses", icon: Graduation },
    { id: 11, path: "/settings", name: "Settings", icon: Settings },
  ];

  const [isActive, setIsActive] = useState(0);
  const toggleActive = (index) => {
    setIsActive(index);
  };

  return (
    <section className="w-16 md:w-[223px] fixed h-screen md:h-[1019px] left-0 top-0 z-10 bg-[#F9F9F9] overflow-hidden border-r pt-[15px] transition-all">
      <div className="py-[9px] border-b">
        <img
          src="/Logo.svg"
          alt="Logo"
          className="lg:w-[137px] lg:h-[29px] mx-auto"
        />
      </div>
      <ul className="space-y-2 mt-[17px] px-[9px]">
        {Sidebar_Link.map((item, index) => (
          <li
            key={index}
            className={`py-[4px] text-[#727272] px-[7px] rounded flex items-center space-x-[9px] ${
              isActive === index ? "bg-primary text-[#FFFFFF]" : ""
            }`}
          >
            <Link
              onClick={() => toggleActive(index)}
              to={item.path}
              className="flex items-center w-full"
            >
              <img src={item.icon} alt={item.name} />
              <span className="hidden md:inline text-[12px] font-medium ml-2">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
