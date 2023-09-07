import ImagePoint from "../components/ImagePoint";

// Icons
import puzzleIcon from "../assets/icons/puzzle.svg";
import lightBulbIcon from "../assets/icons/lightbulb.svg";
import flexIcon from "../assets/icons/flex.svg";
import codeIcon from "../assets/icons/code.svg";

//image
import userImage from "../assets/images/me.jpg";

const About = () => {
  return (
    <section className="w-full bg-white py-1">
      <div className="bs-container w-full">
        <h1 className="black-title">About Me!</h1>
        <p className="text-center opacity-70 max-md:text-sm">
          white? Yeah, cuz it’s a boring page
        </p>

        <div className="flex justify-between items-center max-md:flex-col-reverse">
          <div>
            <ImagePoint label={"Adaptive"} imageURL={puzzleIcon} />
            <ImagePoint label={"Creative"} imageURL={lightBulbIcon} />
            <ImagePoint label={"Flexible"} imageURL={flexIcon} />
            <ImagePoint label={"Continues Learner"} imageURL={codeIcon} />
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-80 h-80 rounded-full my-4"
              src={userImage}
              alt="me"
            />
            <div className="w-80 my-5">
              <p className="text-center font-biriyani opacity-70 text-lg">
                “I am currently pursuing a degree in Computer Science and have
                been actively honing my skills as a Full Stack Developer.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
