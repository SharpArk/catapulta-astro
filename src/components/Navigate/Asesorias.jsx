import { useState } from "react";

function Asesorias() {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <>
      <p
        className="uppercase font-bold text-white relative cursor-pointer overflow-hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setActive(true)}
      >
        Asesorias
        <div
          className="absolute w-full h-1 bg-white bottom-0"
          style={{ left: hover ? "0%" : "100%", transition: ".2s ease" }}
        ></div>
      </p>
      <div
        className="absolute w-xl h-screen bg-gradient-to-l from-[#212E4A] to-[#b2a1df] top-0 z-[1000]"
        style={{ right: active ? "0" : "-100%", transition: "1s ease" }}
      >
        <div className="w-full h-full relative flex flex-col justify-center items-center p-[100px] gap-4">
          <div>
            <p
              className="absolute left-2 top-2 text-4xl cursor-pointer"
              onClick={() => setActive(false)}
            >
              X
            </p>
          </div>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            suscipit commodi harum aperiam sapiente culpa sed eaque soluta
            ducimus optio ex nesciunt cum quod odio, earum fuga tempore at
            laboriosam!
          </p>
          <form className="w-full h-fit flex flex-col gap-2 justify-center items-center">
            <input
              className="border-2 rounded-2xl h-10 w-full pl-2"
              type="text"
              autoComplete="off"
              placeholder="Nombre"
            />
            <input
              className="border-2 rounded-2xl h-10 w-full pl-2"
              type="text"
              autoComplete="off"
              placeholder="Telefono"
            />
            <input
              className="border-2 rounded-2xl h-10 w-full pl-2"
              type="text"
              autoComplete="off"
              placeholder="Correo"
            />
            <textarea
              autoComplete="off"
              placeholder="Déjanos tu mensaje"
              className="min-h-52 max-h-80 border-2 rounded-2xl w-full pl-2"
            ></textarea>
            <button
              className="w-fit h-fit p-5 py-2 rounded-full bg-[#E76889] cursor-pointer hover:bg-[#2D1D4E] text-white"
              style={{ transition: ".2s ease" }}
            >
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Asesorias;
