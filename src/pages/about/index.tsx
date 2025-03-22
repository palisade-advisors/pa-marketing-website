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
    <section className="flex flex-col w-full min-h-[calc(100vh-96px)] px-4 md:px-12 pb-24 items-center gap-12">
      <div className="flex w-full items-center gap-12 py-12 flex-col md:flex-row-reverse">
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <h1 className="text-4xl font-serif font-semibold text-pa-primary">
            Our story
          </h1>
          <p>
            This is a short paragraph about Palisade Advisors. It should be at
            least a paragraph long. Be sure to describe Palisade in the third
            person, why they are awesome, and what they are focusing on at
            Palisade. I am adding a bit more here to make this a bit longer to
            show how the length should be. Also more text here. Where did this
            come from? How did we get started? What is our mission? What are we
            trying to accomplish? What is our vision? What is our purpose? Why
            do we exist? What is our why? What is our raison d'etre? What is our
            raison d'etre? What is our raison d'etre? What is our raison d'etre?
            What is our raison d'etre? What is our raison d'etre? What is our
          </p>
        </div>
        <div className="flex flex-col w-full md:w-1/2 h-[50vh] bg-pa-green">
          <p>image here</p>
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
          {team.map((member) => (
            <AboutCard {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export const Head = headFactory({ title: "About" });
