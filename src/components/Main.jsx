import React from "react";
import LogoFigma from "../assets/icon.png";

const Main = () => {
  return (
    <div className="flex flex-col ">
      {/* Navbar fixa no topo */}
      <nav className="bg-transparent w-full h-16 flex items-center justify-between px-6 shadow-md">
        <div>
          <img src={LogoFigma} alt="Logo" className="h-12" /> {/* Aumentado */}
        </div>
        <div>
          <i className="bx bxs-user-circle text-6xl"></i> {/* Aumentado */}
        </div>
      </nav>

      {/* Introdução */}
      <div className="flex-col bg-white flex items-center justify-center pt-20 pb-30">
        <h1 className="font-bold text-9xl">Terapy</h1> {/* Aumentado */}
        <h2 className="pt-8 text-5xl">Organizando sua mente</h2>{" "}
        {/* Aumentado */}
        <div className="justify-between space-x-10 pt-8">
          <button className="text-amber-50 bg-blue-600 rounded-md py-2 px-4 text-xl">
            Comece agora
          </button>
          <button className="text-amber-50 bg-black rounded-md py-2 px-4 text-xl">
            Instale o aplicativo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
