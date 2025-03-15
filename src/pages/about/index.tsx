import AboutCard from "../../components/AboutCard";
import headFactory from "../../utils/head-factory";

const team = [
  {
    name: "John Doe",
    title: "CEO",
    bio: "This is a short bio about John Doe. It should be at least a paragraph long. Be sure to describe John Doe in the third person, why they are awesome, and what they are focusing on at Palisade. I am adding a bit more here to make this a bit longer to show how the length should be.",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Doe",
    title: "CTO",
    bio: "This is a short bio about Jane Doe. It should be at least a paragraph long. Be sure to describe Jane Doe in the third person, why they are awesome, and what they are focusing on at Palisade. I am adding a bit more here to make this a bit longer to show how the length should be.",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "John Smith",
    title: "COO",
    bio: "This is a short bio about John Smith. It should be at least a paragraph long. Be sure to describe John Smith in the third person, why they are awesome, and what they are focusing on at Palisade. I am adding a bit more here to make this a bit longer to show how the length should be.",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

export default function AboutPage() {
  return (
    <section className="flex flex-col w-full h-[calc(100vh-96px)] px-12 items-center">
      <div className="flex flex-col gap-4 py-4">
        <h1 className="text-center text-4xl font-serif font-semibold">
          Our Team
        </h1>
        <hr className="w-12 h-1.5 bg-pa-orange mx-auto mb-8" />
      </div>
      <div className="flex gap-4 flex-wrap">
        {team.map((member) => (
          <AboutCard {...member} />
        ))}
      </div>
    </section>
  );
}

export const Head = headFactory({ title: "About" });
