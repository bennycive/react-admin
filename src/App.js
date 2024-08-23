import React from "react";
import { useState } from "react";
import {  
  BsSearch, 
  BsChevronDown,
  BsPeople,
  BsWrenchAdjustable,
  BsTelephoneForward,
  BsSkipStart,
  BsStickies,
  BsStars,
  BsStack,
  BsBodyText,
  BsBoxArrowInRight,
  BsPerson,
  BsFingerprint,
  BsFront,
    
 } from "react-icons/bs";

import { RxDashboard } from "react-icons/rx";
import { MdMenuOpen } from "react-icons/md";

const App = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", icon:<RxDashboard /> },
    { title: "Users", icon: <BsPeople /> },
    { title: "Settings", icon:<BsWrenchAdjustable /> },
    { title: "Help", icon:<BsTelephoneForward /> },
    { title: "Media", spacing: true, icon:<BsSkipStart /> },
    {
      title: "Projects", icon:<BsStickies />,
      submenu: true,
      submenuItems: [
        { title: "Project 1", icon: <BsStars />},
        { title: "Project 2", icon:<BsStack /> },
        { title: "Project 3", icon:<BsStickies />}
      ]
    },
    { title: "Biometric",icon:<BsFingerprint /> },
    { title: "Reports",icon:<BsBodyText /> },
    { title: "Profile",icon:<BsPerson />},
    { title: "Logout",icon:<BsBoxArrowInRight /> }
  ];
  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen ${open
          ? "w-60"
          : "w-20"} duration-300 pt-8 p-5 relative`}
      >
        <MdMenuOpen
          className={`bg-white text-3xl rounded-md -right-3 text-dark-purple absolute top-9  ${!open &&
            "rotate-180"}  cursor-pointer border border-dark-purple`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
        <BsFront 
            className={`text-white text-4xl rounded cursor-pointer ${open &&
              "rotate-[360deg]"} duration-300 block float-left mr-2`}
          />
          <h1
            className={`text-white font-semibold origin-left text-2xl duration-300 ${!open &&
              "scale-0"} `}
          >
            SofTech
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-slate-50 mt-6 py-2 ${!open
            ? "px-2.5"
            : "px-2.5"} `}
        >
          <BsSearch
            className={`text-gray-400 cursor-pointer block float-left text-lg ${open &&
              "mr-2 text-xl"} `}
          />
          <input
            type={"search"}
            placeholder="Search ..."
            className={`text-base bg-transparent w-full focus:outline-none ${!open &&
              "hidden"} `}
          />
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) =>
            <React.Fragment key={index}>
              <li
                className={`text-gray-300 text-sm flex items-center hover:text-dark-purple ${menu.spacing
                  ? "mt-9"
                  : "mt-2"} gap-x-4 cursor-pointer p-2 rounded hover:bg-light-white`}
              >
                <span className="text-2xl block float-left">
                   {menu.icon ? menu.icon : <RxDashboard />}
                </span>
                <span
                  className={`text-base font-medium ${!open &&
                    "hidden"} flex-1`}
                >
                  {menu.title}
                </span>
                {menu.submenu &&
                  <BsChevronDown
                    className={`${submenuOpen && "rotate-180"}`}
                    onClick={() => {
                      setsubmenuOpen(!submenuOpen);
                    }}
                  />}
              </li>
              {/* Check if submenuItems exist before rendering */}
              {menu.submenu && open &&
                submenuOpen &&
                menu.submenuItems &&
                menu.submenuItems.length > 0 &&
                <ul>
                  {menu.submenuItems.map((submenuItem, subIndex) =>
                    <li
                      key={subIndex}
                      className="text-gray-300 text-sm duration-300 flex items-center hover:text-dark-purple gap-x-4 cursor-pointer p-2 px-5 rounded hover:bg-light-white"
                    >
                      {submenuItem.title}
                    </li>
                  )}
                </ul>}
            </React.Fragment>
          )}
        </ul>
      </div>
      <div className="p-7">
        <h1 class="font-semibold text-black text-4xl">Home Page</h1>
      </div>
    </div>
  );
};

export default App;
