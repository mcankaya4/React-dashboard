import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

function MobileMainNav() {
  return (
    <ul className="flex flex-1 items-center justify-around">
      <li>
        <NavLink
          to="/dashboard"
          className="group block rounded-sm p-2 hover:bg-gray-50"
        >
          <HiOutlineHome className="h-8 w-8 text-gray-400 duration-300 group-hover:text-indigo-600 group-[.active]:text-indigo-600" />
        </NavLink>
      </li>
      <li>
        <NavLink
          className="group block rounded-sm p-2 hover:bg-gray-50"
          to="/bookings"
        >
          <HiOutlineCalendarDays className="h-8 w-8 text-gray-400 duration-300 group-hover:text-indigo-600 group-[.active]:text-indigo-600" />
        </NavLink>
      </li>
      <li>
        <NavLink
          className="group block rounded-sm p-2 hover:bg-gray-50"
          to="/cabins"
        >
          <HiOutlineHomeModern className="h-8 w-8 text-gray-400 duration-300 group-hover:text-indigo-600 group-[.active]:text-indigo-600" />
        </NavLink>
      </li>
      <li>
        <NavLink
          className="group block rounded-sm p-2 hover:bg-gray-50"
          to="/users"
        >
          <HiOutlineUsers className="h-8 w-8 text-gray-400 duration-300 group-hover:text-indigo-600 group-[.active]:text-indigo-600" />
        </NavLink>
      </li>
      <li>
        <NavLink
          className="group block rounded-sm p-2 group-[.active]:text-gray-50 hover:bg-gray-50"
          to="/settings"
        >
          <HiOutlineCog6Tooth className="h-8 w-8 text-gray-400 duration-300 group-hover:text-indigo-600 group-[.active]:text-indigo-600" />
        </NavLink>
      </li>
    </ul>
  );
}

export default MobileMainNav;
