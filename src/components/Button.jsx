const Button = ({ label, href }) => {
  return (
    <a
      href={href}
      className="font-biriyani my-7 py-2 px-4 border-2 border-white hover:bg-white hover:text-black cursor-pointer text-lg max-md:text-xs"
    >
      {label}
    </a>
  );
};

export default Button;
