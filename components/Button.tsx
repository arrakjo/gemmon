const Button = ({ title, url }) => {
  return (
    <button className="bg-whitesmoke text-primary px-8 py-3 rounded-full shadow-xl hover:scale-105 active:scale-100 duration-200 transition font-medium">
      {!title ? "Press me" : title}
    </button>
  );
};

export default Button;
