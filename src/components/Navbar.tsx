import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="bg-black text-white p-4 flex justify-center space-x-8">
    <NavLink
      to="/"
      className={({ isActive }) =>
        `uppercase text-sm tracking-wider transition-colors ${
          isActive ? "text-amber-400" : "text-white hover:text-gray-300"
        }`
      }
    >
      Dhikr
    </NavLink>
    <NavLink
      to="/acts"
      className={({ isActive }) =>
        `uppercase text-sm tracking-wider transition-colors ${
          isActive ? "text-amber-400" : "text-white hover:text-gray-300"
        }`
      }
    >
      Small deeds for success
    </NavLink>
  </nav>
);
