import topSvg from "../assets/icons/top.svg";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-black text-white py-11 flex flex-col items-center relative">
        <div className="w-52">
          <h3 className="font-explora text-4xl text-center ">
            “Experience is the name everyone gives to their mistakes”
          </h3>
        </div>

        <p className="text-center opacity-40 mx-3 mt-11 text-sm font-biriyani">
          You have been somehow reached here without any colors (except my
          stunning photo) haha!
        </p>
        <a href="#home">
          <img src={topSvg} className="absolute bottom-[-20px]" />
        </a>
      </div>
      <div className="bg-white text-black pt-11 pb-3">
        <p className="text-center">
          <a
            className="cursor-pointer opacity-75 hover:opacity-100"
            href="#home"
          >
            Arshal Abbas
          </a>{" "}
          <span className="font-bold">©2023</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
