import { useState } from "react";

function Hero() {
  const [active, setActive] = useState(2);

  return (
    <>
      <header className="w-screen h-52 absolute bottom-0 bg-[#2D1D4E] rounded-tl-full rounded-tr-full z-50">
        <nav className="flex w-full h-full justify-around items-center">
          <a className="text-5xl text-white" href="/">
            Catapulta
          </a>
          <a className="text-5xl text-white" href="Sobre Nosotros">
            Sobre Nosotros
          </a>
          <a className="text-5xl text-white" href="Estudios">
            Estudios
          </a>
          <a className="text-5xl text-white" href="Instituciones">
            Instituciones
          </a>
          <a className="text-5xl text-white" href="Test">
            Test
          </a>
          <p className="text-5xl text-white border-b-2 border-b-white cursor-pointer">
            Asesorias
          </p>
        </nav>
      </header>
      <section className="relative flex w-screen h-screen overflow-hidden">
        <img
          className={`${
            active == 1
              ? `w-[calc((100vw/3)+400px)]`
              : `w-[calc((100vw/3)-200px)]`
          } h-screen object-cover shrink-0`}
          src="/imgs/heroimg-1.jpeg"
          alt=""
        />
        <img
          className={`${
            active == 2
              ? `w-[calc((100vw/3)+400px)]`
              : `w-[calc((100vw/3)-200px)]`
          } h-screen object-cover shrink-0`}
          src="/imgs/heroimg-2.jpeg"
          alt=""
        />
        <img
          className={`${
            active == 3
              ? `w-[calc((100vw/3)+400px)]`
              : `w-[calc((100vw/3)-200px)]`
          } h-screen object-cover shrink-0`}
          src="/imgs/heroimg-3.jpeg"
          alt=""
        />
        <img
          className={`${
            active == 4
              ? `w-[calc((100vw/3)+400px)]`
              : `w-[calc((100vw/3)-200px)]`
          } h-screen object-cover shrink-0`}
          src="/imgs/heroimg-4.jpeg"
          alt=""
        />
        <img
          className={`${
            active == 5
              ? `w-[calc((100vw/3)+400px)]`
              : `w-[calc((100vw/3)-200px)]`
          } h-screen object-cover shrink-0`}
          src="/imgs/heroimg-5.jpeg"
          alt=""
        />
        <img
          className={`${
            active == 6
              ? `w-[calc((100vw/3)+400px)]`
              : `w-[calc((100vw/3)-200px)]`
          } h-screen object-cover shrink-0`}
          src="/imgs/heroimg-6.jpeg"
          alt=""
        />
      </section>
    </>
  );
}

export default Hero;
