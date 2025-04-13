import AboutCard from "../../components/AboutCard";
import headFactory from "../../utils/head-factory";
import useStoryContent from "../../hooks/use-story-content";
import useTeamMembers from "../../hooks/use-team-members";

export default function AboutPage() {
  const storyContent = useStoryContent();
  const teamMembers = useTeamMembers();

  return (
    <section className="flex flex-col w-full min-h-[calc(100vh-96px)] px-4 md:px-12 pb-24 items-center gap-12">
      <div className="flex w-full items-center gap-12 py-12 flex-col md:flex-row-reverse">
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <h1 className="text-4xl font-serif font-semibold text-pa-primary">
            {storyContent.title}
          </h1>
          <p>{storyContent.description}</p>
        </div>
        <div className="flex flex-col w-full md:w-1/2 h-[50vh]">
          <img
            src={storyContent.image}
            alt="About"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4 py-4">
          <h1 className="text-center text-4xl font-serif font-semibold text-pa-primary">
            Our Team
          </h1>
          <hr className="w-12 h-1.5 bg-pa-orange mx-auto mb-8" />
        </div>
        <div className="flex gap-4 flex-wrap">
          {teamMembers.map((member) => (
            <AboutCard {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export const Head = headFactory({ title: "About" });
