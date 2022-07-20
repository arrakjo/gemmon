import LinkButton from "./LinkButton";

const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between">
      <a
        href="/"
        className="hidden md:block text-4xl text-whitesmoke font-light p-2 mb-1"
      >
        Gemmon
      </a>
      <a
        href="/"
        className="block md:hidden text-4xl text-whitesmoke font-light p-2 mb-1"
      >
        G.
      </a>

      <div className="hidden md:flex items-center space-x-20">
        <a className="text-lg text-whitesmoke p-1" href="/services">
          Services
        </a>
        <a className="text-lg text-whitesmoke p-1" href="/projects">
          Projects
        </a>
        <a className="text-lg text-whitesmoke p-1" href="/about">
          About us
        </a>
      </div>

      <LinkButton title="Get in touch" url="#" />
    </header>
  );
};

export default Header;
