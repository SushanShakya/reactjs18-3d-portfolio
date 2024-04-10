import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { appstore, github, playstore } from "../../assets";
import { projects } from "../../constants";
import { config } from "../../constants/config";
import { SectionWrapper } from "../../hoc";
import { TProject } from "../../types";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  playStoreLink,
  appStoreLink
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px]">
          <div className="relative h-[230px] w-full">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover"
            />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              {
                sourceCodeLink &&
                <div
                  onClick={() => window.open(sourceCodeLink, "_blank")}
                  className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              }
              <div style={{ width: 2 }}></div>
              {
                playStoreLink &&
                <div
                  onClick={() => window.open(playStoreLink, "_blank")}
                  className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
                >
                  <img
                    src={playstore}
                    alt="github"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              }
              <div style={{ width: 2 }}></div>
              {
                appStoreLink &&
                <div
                  onClick={() => window.open(appStoreLink, "_blank")}
                  className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
                >
                  <img
                    src={appstore}
                    alt="github"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              }
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
