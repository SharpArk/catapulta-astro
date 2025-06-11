import { useState } from "react";

function SliderImages() {
  const images = [
    { img: "/img/Fundadores/horizontal/sebas.jpg" },
    { img: "/img/Fundadores/horizontal/hanz.jpg" },
    { img: "/img/Heroimg-3.webp" },
    { img: "/img/Fundadores/horizontal/Mario.jpg" },
    { img: "/img/Heroimg-5.webp" },
  ];

  const [position, setPosition] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleNext = () => {
    if (position < images.length - 1) {
      setPosition(position + 1);
    }
  };

  const handlePrev = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  const handleHover = () => {
    setIsActive(true);
  };

  const handleNoHover = () => {
    setIsActive(false);
  };

  return (
    <section className="w-full h-screen flex justify-center items-center p-5 bg-[#242e47]">
      <div
        className="relative w-full max-w-[900px] h-[calc(100vh-200px)] sm:h-[calc(100vh-150px)] md:h-[calc(100vh-130px)] rounded-2xl overflow-hidden"
        onMouseEnter={handleHover}
        onMouseLeave={handleNoHover}
      >
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${position * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.img}
              alt=""
              className="w-full max-w-full h-[calc(100vh-200px)] sm:h-[calc(100vh-150px)] md:h-[calc(100vh-130px)] object-cover shrink-0"
              style={{ flexShrink: 0 }}
            />
          ))}
        </div>

        <button
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 text-3xl sm:text-4xl text-white rounded-full flex justify-center items-center bg-[#242e47] ${
            position === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={handlePrev}
          disabled={position === 0}
          aria-label="Anterior"
        >
          &#60;
        </button>
        <button
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 text-3xl sm:text-4xl text-white rounded-full flex justify-center items-center bg-[#242e47] ${
            position === images.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={handleNext}
          disabled={position === images.length - 1}
          aria-label="Siguiente"
        >
          &#62;
        </button>

        <a
          href="/Sobre Nosotros/Fundadores"
          className={`absolute bottom-2 font-bold uppercase text-white p-3 rounded-2xl bg-[#00000060] backdrop-blur-md z-10 text-sm sm:text-lg transition-all duration-1000 ease-in-out`}
          style={isActive ? { left: "15px" } : { left: "-110%" }}
        >
          Click aquí para ver los Fundadores
        </a>
      </div>
    </section>
  );
}

export default SliderImages;
