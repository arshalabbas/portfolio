import ProgressBar from "../components/ProgressBar";

import { skillsArray } from "../constants";

const Skills = () => {
  return (
    <section className="bg-black h-screen py-1 text-white w-full">
      <div className="bs-container w-full">
        <h1 className="white-title mb-6">My Skills!</h1>
        {skillsArray.map((skill) => (
          <>
            <h3
              key={skill.category}
              className="text-2xl font-biriyani font-extrabold mt-6 max-md:text-center"
            >
              {skill.category}
            </h3>
            {skill.skillsList.map((skillOne) => (
              <ProgressBar
                label={skillOne.label}
                percentage={skillOne.percentage}
              />
            ))}
          </>
        ))}
      </div>
    </section>
  );
};

export default Skills;
