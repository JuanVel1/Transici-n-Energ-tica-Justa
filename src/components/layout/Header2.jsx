import { Link, useLocation } from "react-router-dom";

export default function Header2() {
  return (
    <header className="bg-gradient-to-b from-sky-500 to-cyan-950 shadow-lg">
      <div className="container  mx-auto mt-0 px-4 py-6">
        <div className="flex items-center mx-auto justify-between ">
          <h1 className="text-2xl text-white  hover:text-black font-bold">
            {" "}
            EcoEnergy Insights
          </h1>
          <nav >
            <ul className="flex space-x-6 text-xl text-slate-50 font-bold ">
              <li className="hover:text-black ">
                <Link
                  to="/table"
                >
                  Table
                </Link>
              </li>
              <li className="hover:text-black ">
                <Link
                  to="/overview"
                >
                  Overview
                </Link>
              </li>

              <li className="hover:text-[#43e6bd]">
                <Link
                  to="/calculator"
                >
                  Calculator
                </Link>
              </li>

              <li className="hover:text-red-600 ">
                <Link
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
