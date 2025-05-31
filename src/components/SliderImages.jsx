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
        className="w-[calc(100vw/1.2)] h-[calc(100vh-200px)] overflow-hidden relative rounded-2xl"
        onMouseEnter={handleHover}
        onMouseLeave={handleNoHover}
      >
        <div className="flex transition-transform duration-1000 ease-in-out">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.img}
              className="w-[calc(100vw/1.2)] h-[calc(100vh-200px)] object-cover shrink-0"
              alt=""
              style={{
                transform: `translateX(-${position * 100}%)`,
                transition: "1s ease",
              }}
            />
          ))}
        </div>
        <button
          className={`w-14 h-14 text-4xl text-white rounded-full flex justify-center items-center z-30 absolute left-3 top-1/2 transform -translate-y-1/2  bg-[#242e47] ${
            position === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={handlePrev}
          disabled={position === 0}
          aria-label="Anterior"
        >
          &#60;
        </button>
        <button
          className={`w-14 h-14 text-4xl text-white rounded-full flex justify-center items-center z-30 absolute right-3 top-1/2 transform -translate-y-1/2  bg-[#242e47] ${
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
          className={`absolute uppercase text-3xl bottom-2 font-bold text-white p-5 rounded-2xl bg-[#00000060] z-10 w-fit link backdrop-blur-md`}
          href="/Sobre Nosotros/Fundadores"
          style={
            isActive
              ? { left: "25px", transition: "1s ease" }
              : { left: "-100%", transition: "1s ease" }
          }
        >
          Click aquí para ver los Fundadores
        </a>
      </div>
    </section>
  );
}

export default SliderImages;
