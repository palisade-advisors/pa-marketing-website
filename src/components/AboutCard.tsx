import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";

interface AboutCardProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

export default function AboutCard({
  name,
  title,
  bio,
  imageUrl,
}: AboutCardProps) {
  return (
    <div className="flex flex-col items-start justify-center gap-8 border border-pa-primary border-opacity-20 p-6 rounded-lg w-96 bg-white bg-opacity-40">
      <div className="flex gap-4 items-center">
        <img src={imageUrl} className="rounded-full w-24" />
        <div className="flex flex-col items-start justify-center gap-2">
          <div>
            <h2 className="text-2xl font-serif font-semibold">{name}</h2>
            <p className="text-xl text-pa-primary opacity-75">{title}</p>
          </div>
          <span className="flex gap-2">
            <a href="https://www.linkedin.com/in/johndoe" target="_blank">
              <IconBrandLinkedin className="text-pa-primary hover:text-pa-red transition-all duration-300 ease-out" />
            </a>
            <a href="mailto:johndoe@mail.com">
              <IconMail className="text-pa-primary hover:text-pa-red transition-all duration-300 ease-out" />
            </a>
          </span>
        </div>
      </div>
      <div className="text-lg">
        This is a short bio about John Doe. It should be at least a paragraph
        long. Be sure to describe John Doe in the third person, why they are
        awesome, and what they are focusing on at Palisade. I am adding a bit
        more here to make this a bit longer to show how the length should be.
      </div>
    </div>
  );
}
