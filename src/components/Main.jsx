import React from "react";
import LogoFigma from "../assets/icon.png";
import milano_de_delano__ou__delano_de_milano from "../assets/milano_de_delano__ou__delano_de_milano.jpg";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
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

      {/* Começo do conteúdo */}
      <div className="flex-col bg-white items-center px-18 pb-18">
        <h4 className="font-bold text-xl">Por que a Terapy é boa para você?</h4>{" "}
        {/* Aumentado */}
        <p className="text-gray-500 pb-6 text-lg">
          Saiba todos os benefícios de utilizar a Terapy na sua rotina
        </p>
        <div className="pt-8 grid grid-cols-2 grid-rows-3 gap-12">
          <div className="flex-col">
            <div className="text-xl font-bold flex">
              <i className="text-3xl pt-[3px] bx bx-info-circle pr-4"></i>{" "}
              {/* Aumentado */}
              <h1>Eficiência no acompanhamento</h1>
            </div>
            <div className="ml-12 mr-14 pb-8">
              <p className="text-lg">
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </p>
            </div>
          </div>

          <div className="flex-col">
            <div className="text-xl font-bold flex">
              <i className="text-3xl pt-[3px] bx bx-info-circle pr-4"></i>{" "}
              {/* Aumentado */}
              <h1>Maior organização</h1>
            </div>
            <div className="ml-12 mr-14 pb-8">
              <p className="text-lg">
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </p>
            </div>
          </div>

          <div className="flex-col">
            <div className="text-xl font-bold flex">
              <i className="text-3xl pt-[3px] bx bx-info-circle pr-4"></i>{" "}
              {/* Aumentado */}
              <h1>Seu trabalho fica mais fácil</h1>
            </div>
            <div className="ml-12 mr-14 pb-8">
              <p className="text-lg">
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </p>
            </div>
          </div>

          <div className="flex-col">
            <div className="text-xl font-bold flex">
              <i className="text-3xl pt-[3px] bx bx-info-circle pr-4"></i>{" "}
              {/* Aumentado */}
              <h1>A comunicação é nosso lema</h1>
            </div>
            <div className="ml-12 mr-14 pb-8">
              <p className="text-lg">
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </p>
            </div>
          </div>

          <div className="flex-col">
            <div className="text-xl font-bold flex">
              <i className="text-3xl pt-[3px] bx bx-info-circle pr-4"></i>{" "}
              {/* Aumentado */}
              <h1>Você fica mais produtivo</h1>
            </div>
            <div className="ml-12 mr-14 pb-8">
              <p className="text-lg">
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </p>
            </div>
          </div>

          <div className="flex-col">
            <div className="text-xl font-bold flex">
              <i className="text-3xl pt-[3px] bx bx-info-circle pr-4"></i>{" "}
              {/* Aumentado */}
              <h1>Temos tudo para você</h1>
            </div>
            <div className="ml-12 mr-14 pb-8">
              <p className="text-lg">
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meio do conteúdo */}
      <div className="flex-col bg-white items-center px-18 pb-18">
        <h4 className="font-bold text-xl">Funcionalidades</h4> {/* Aumentado */}
        <p className="text-gray-500 pb-6 text-lg">
          Entenda tudo que oferecemos
        </p>
        <div className="pt-8 grid grid-cols-2 grid-rows-3 gap-12">
          <div className="flex-col">
            <div className="text-xl font-bold flex">
              <i className="text-3xl pt-[3px] bx bx-info-circle pr-4"></i>{" "}
              {/* Aumentado */}
              <h1>Registro de notas</h1>
            </div>
            <div className="ml-12 mr-14 pb-8">
              <p className="text-lg">
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </p>
            </div>
          </div>

          <div className="flex-col">
            <div className="text-xl font-bold flex">
              <i className="text-3xl pt-[3px] bx bx-info-circle pr-4"></i>{" "}
              {/* Aumentado */}
              <h1>Gráficos do progresso do paciente</h1>
            </div>
            <div className="ml-12 mr-14 pb-8">
              <p className="text-lg">
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </p>
            </div>
          </div>

          <div className="flex-col">
            <div className="text-xl font-bold flex">
              <i className="text-3xl pt-[3px] bx bx-info-circle pr-4"></i>{" "}
              {/* Aumentado */}
              <h1>I.A Integrada</h1>
            </div>
            <div className="ml-12 mr-14 pb-8">
              <p className="text-lg">
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </p>
            </div>
          </div>

          <div className="flex-col">
            <div className="text-xl font-bold flex">
              <i className="text-3xl pt-[3px] bx bx-info-circle pr-4"></i>{" "}
              {/* Aumentado */}
              <h1>Diário de emoções</h1>
            </div>
            <div className="ml-12 mr-14 pb-8">
              <p className="text-lg">
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </p>
            </div>
          </div>

          <div className="flex-col">
            <div className="text-xl font-bold flex">
              <i className="text-3xl pt-[3px] bx bx-info-circle pr-4"></i>{" "}
              {/* Aumentado */}
              <h1>Questionários de autoavaliação</h1>
            </div>
            <div className="ml-12 mr-14 pb-8">
              <p className="text-lg">
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </p>
            </div>
          </div>

          <div className="flex-col">
            <div className="text-xl font-bold flex">
              <i className="text-3xl pt-[3px] bx bx-info-circle pr-4"></i>{" "}
              {/* Aumentado */}
              <h1>Fácil de usar</h1>
            </div>
            <div className="ml-12 mr-14 pb-8">
              <p className="text-lg">
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Avaliações/Depoimentos */}
      <div className="flex-col bg-gray-100 items-center px-15 pb-15">
        <h4 className="font-bold text-[20px] pb-10">Depoimentos</h4>
        <div className="grid grid-cols-2 gap-0">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="m-5 border-1 border-gray-400 rounded-[8px] shadow-xs w-fit"
            >
              <div className="flex m-4">
                {[...Array(5)].map((_, starIndex) => (
                  <i key={starIndex} className="bx bx-star"></i>
                ))}
              </div>
              <div className="m-4">
                <div>
                  <h4 className="font-bold text-[1rem]">
                    Review Title
                  </h4>
                  <h4 className="font-medium text-black text-[14px] pb-5">
                    Review body
                  </h4>
                </div>
                <div className="flex">
                  <img
                    src={milano_de_delano__ou__delano_de_milano}
                    alt=""
                    className="rounded-full w-12 h-12"
                  />
                  <div className="pl-5 flex-col">
                    <h6 className="text-gray-600 font-semibold">Reviewer Name</h6>
                    <p className="text-gray-400 font-semibold">Date</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
