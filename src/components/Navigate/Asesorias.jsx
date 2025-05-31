import { useState } from "react";

function Asesorias() {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <>
      <p
        className="text-xl uppercase font-bold text-white relative cursor-pointer overflow-hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setActive(true)}
      >
        Asesorias
        <div
          className="absolute w-full h-1 bg-white bottom-0"
          style={{ left: hover ? "0%" : "100%", transition: ".2s ease" }}
        />
      </p>

      <div
        className="fixed top-0 right-0 w-[500px] max-w-full h-screen bg-gradient-to-l from-[#212E4A] to-[#b2a1df] z-[1000] transition-all duration-700 ease-in-out"
        style={{ transform: active ? "translateX(0%)" : "translateX(100%)" }}
      >
        <div className="w-full h-full relative flex flex-col justify-center items-center p-10 gap-4">
          <button
            className="absolute left-4 top-4 text-4xl text-white hover:text-[#E76889] transition"
            onClick={() => setActive(false)}
            aria-label="Cerrar"
          >
            ×
          </button>

          <p className="text-2xl text-white text-center">
            ¿Tienes dudas o quieres orientación? Déjanos tus datos y un mensaje,
            y nos pondremos en contacto contigo.
          </p>

          <form className="w-full flex flex-col gap-4 justify-center items-center text-black">
            <input
              className="border-2 rounded-2xl h-10 w-full px-4"
              type="text"
              autoComplete="off"
              placeholder="Nombre"
            />
            <input
              className="border-2 rounded-2xl h-10 w-full px-4"
              type="text"
              autoComplete="off"
              placeholder="Teléfono"
            />
            <input
              className="border-2 rounded-2xl h-10 w-full px-4"
              type="email"
              autoComplete="off"
              placeholder="Correo"
            />
            <textarea
              autoComplete="off"
              placeholder="Déjanos tu mensaje"
              className="min-h-52 max-h-80 border-2 rounded-2xl w-full px-4 py-2"
            />
            <button
              type="submit"
              className="w-fit px-8 py-2 rounded-full bg-[#E76889] hover:bg-[#2D1D4E] text-white transition"
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
