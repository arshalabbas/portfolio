import IconLink from "../components/IconLink";
import Button from "../components/Button";

// Images and Icons
import scribble from "../assets/svgs/scribble.svg";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import emailIcon from "../assets/icons/envelop.svg";

const Home = () => {
  return (
    <section className="w-100 bg-black text-white">
      <div className="bs-container flex flex-col w-full h-screen">
        <div className="w-100 py-4">
          <p className="font-barcode text-center text-2xl text-white">
            ARSHAL ABBAS
          </p>
        </div>

        {/* Left Section */}
        <div className="grow flex max-md:flex-col items-center justify-between max-md:justify-center">
          <div>
            <h2 className="font-bebas opacity-70 text-3xl max-md:text-center">
              HEY I'M
            </h2>
            <h1 className="font-rubik text-5xl max-md:text-center">
              ARSHAL ABBAS
            </h1>
            <h2 className="font-bebas opacity-70 text-3xl max-md:text-center">
              A FULL STACK DEVELOPER?
            </h2>
            <div className="w-full flex max-md:justify-center">
              <Button href={"#about"} label={"MORE ABOUT ME!"} />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex max-md:w-full">
            <div className="max-md:hidden">
              <img src={scribble} className="w-[16rem] h-[16rem] my-11 mx-5" />
            </div>

            <div className="flex mt-3 max-md:w-full flex-col max-md:flex-row max-md:w-100 justify-evenly">
              <IconLink
                iconURL={githubIcon}
                href="https://github.com/arshalabbas"
              />
              <IconLink
                iconURL={linkedinIcon}
                href="https://linkedin.com/in/arshalabbas"
              />
              <IconLink
                iconURL={instagramIcon}
                href="https://www.instagram.com/_____.arsh.__"
              />
              <IconLink
                iconURL={emailIcon}
                href="mailto:arshalabbas123@gmail.com"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
