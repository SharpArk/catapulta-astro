const Header = ({ titleHero, img, children }) => {
  return (
    <>
      {children}
      <section
        className="w-full h-[calc(100vh-200px)] md:h-[calc(100vh-150px)] sm:h-[calc(50vh-100px)] flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(/${img})` }}
      ></section>
      <section className="h-[200px] md:h-[150px] sm:h-[100px] w-full flex justify-center items-center text-white font-bold uppercase text-2xl md:text-3xl sm:text-xl px-4 text-center">
        {titleHero === "Catapulta" ? (
          <img
            className="w-1/3 md:w-1/4 sm:w-1/2 object-contain"
            src="/astro.svg"
            alt="Logo"
          />
        ) : (
          <h1>{titleHero}</h1>
        )}
      </section>
    </>
  );
};

export default Header;
