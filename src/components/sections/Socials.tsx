import { socials } from "../../constants";
import { SectionWrapper } from "../../hoc";

const Socials = () => {
    return (
        <>
            <div
                className="flex flex-row flex-wrap justify-center gap-10">
                {socials.map((e) => (
                    <div className="h-28 w-28 cursor-pointer" key={e.name}
                        onClick={() => window.open(e.link, "_blank")}
                    >
                        <img
                            src={e.icon}
                            alt={e.name}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Socials, "socials");
