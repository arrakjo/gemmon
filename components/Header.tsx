import LinkButton from "./LinkButton";

const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between">
      <a href="/" className="text-4xl text-whitesmoke font-light mb-1">
        Gemmon
      </a>

      <div className="flex items-center space-x-20">
        <a className="text-lg text-whitesmoke p-1" href="#">
          Services
        </a>
        <a className="text-lg text-whitesmoke p-1" href="#">
          Projects
        </a>
        <a className="text-lg text-whitesmoke p-1" href="#">
          About us
        </a>
      </div>

      <LinkButton title="Get in touch" url="#" />
    </header>
  );
};

export default Header;
