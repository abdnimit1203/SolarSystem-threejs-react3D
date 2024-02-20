import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " active bg-primary px-3 py-2  text-neutral rounded-xl"
            : "hover:bg-primary px-3 py-2 hover:text-neutral transition duration-200 rounded-xl"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/three"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " active bg-primary px-3 py-2  text-neutral rounded-xl"
            : "hover:bg-primary px-3 py-2 hover:text-neutral transition duration-200 rounded-xl"
        }
      >
        Three JS
      </NavLink>
      <NavLink
        to="/room"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " active bg-primary px-3 py-2  text-neutral rounded-xl"
            : "hover:bg-primary px-3 py-2 hover:text-neutral transition duration-200 rounded-xl"
        }
      >
        Furniture Room
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " active bg-primary px-3 py-2  text-neutral rounded-xl"
            : "hover:bg-primary px-3 py-2 hover:text-neutral transition duration-200 rounded-xl"
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " active bg-primary px-3 py-2  text-neutral rounded-xl"
            : "hover:bg-primary px-3 py-2 hover:text-neutral transition duration-200 rounded-xl"
        }
      >
        Register
      </NavLink>
    </>
  );
  return (
    <div className="drawer bg-[#11111141] font-semibold absolute pb-3 text-white z-20">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar  ">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-1 px-2 mx-2 xl:ml-6">
            {/* LOGO STARTS HERE */}
            <Link to={"/"}>
              {" "}
              <div
                className="button p-2 mb-2 bg-gradient-to-tr from-amber-400 to-rose-500 rounded-lg cursor-pointer select-none
                active:translate-y-2  active:[box-shadow:0_0px_0_0_#d66d0a,0_0px_0_0_#d66d0a41]
                active:border-b-[0px]
                transition-all duration-150 [box-shadow:0_10px_0_0_#d66d0a,0_15px_0_0_#d66d0a41]
                border-b-[1px] border-rose-400"
              >
                <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
                  React 3D World
                </span>
              </div>
            </Link>
            {/* LOGO STARTS HERE */}
          </div>
          <div className="flex-none hidden lg:block space-x-6">
            <div className="menu menu-horizontal space-x-3">{navlinks}</div>
          </div>
        </div>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-neutral space-y-6 pt-[20%]">
           {/* LOGO STARTS HERE */}
           <Link to={"/"}>
              {" "}
              <div
                className="button p-2 mb-2 bg-gradient-to-tr from-amber-400 to-rose-500 rounded-lg cursor-pointer select-none
                active:translate-y-2  active:[box-shadow:0_0px_0_0_#d66d0a,0_0px_0_0_#d66d0a41]
                active:border-b-[0px]
                transition-all duration-150 [box-shadow:0_10px_0_0_#d66d0a,0_15px_0_0_#d66d0a41]
                border-b-[1px] border-rose-400"
              >
                <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
                  React 3D World
                </span>
              </div>
            </Link>
            {/* LOGO STARTS HERE */}
          {navlinks}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
