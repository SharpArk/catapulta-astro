const Header = ({ titleHero, img, children }) => {
  return (
    <>
      {children}
      <section
        className="w-full h-[calc(100vh-200px)] flex justify-center items-center bg-cover"
        style={{ backgroundImage: `url(/${img})` }}
      ></section>
      <section className="h-[200px] w-full flex justify-center items-center text-white font-bold uppercase text-2xl">
        <h1>{titleHero}</h1>
      </section>
    </>
  );
};

export default Header;
