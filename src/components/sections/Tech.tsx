import { technologies } from "../../constants";
import { SectionWrapper } from "../../hoc";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            {/* <BallCanvas icon={technology.icon} /> */}
            <img 
              src={technology.icon}
              alt={technology.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
