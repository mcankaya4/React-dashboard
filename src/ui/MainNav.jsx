import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     color: var(--color-grey-400);
//     transition: all 0.3s;
//   }
//
//   &:hover svg,
//   &:active svg,
//   &.active:link svg,
//   &.active:visited svg {
//     color: var(--color-brand-600);
//   }
// `;

function MainNav() {
  return (
    <ul className="flex flex-col gap-2">
      <li>
        <NavLink className="sidebar--navlink group" to="/dashboard">
          <HiOutlineHome className="h-6 w-6 text-gray-400 duration-300 group-hover:text-indigo-600 group-[.active]:text-indigo-600" />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="sidebar--navlink group" to="/bookings">
          <HiOutlineCalendarDays className="h-6 w-6 text-gray-400 duration-300 group-hover:text-indigo-600 group-[.active]:text-indigo-600" />
          <span>Bookings</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="sidebar--navlink group" to="/cabins">
          <HiOutlineHomeModern className="h-6 w-6 text-gray-400 duration-300 group-hover:text-indigo-600 group-[.active]:text-indigo-600" />
          <span>Cabins</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="sidebar--navlink group" to="/users">
          <HiOutlineUsers className="h-6 w-6 text-gray-400 duration-300 group-hover:text-indigo-600 group-[.active]:text-indigo-600" />
          <span>Users</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="sidebar--navlink group" to="/settings">
          <HiOutlineCog6Tooth className="h-6 w-6 text-gray-400 duration-300 group-hover:text-indigo-600 group-[.active]:text-indigo-600" />
          <span>Settings</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
