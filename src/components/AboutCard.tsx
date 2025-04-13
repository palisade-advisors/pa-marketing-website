import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";

interface AboutCardProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  email: string;
  linkedIn: string;
}

export default function AboutCard({
  name,
  title,
  bio,
  imageUrl,
  email,
  linkedIn,
}: AboutCardProps) {
  return (
    <div className="flex flex-col items-start gap-8 border border-pa-primary border-opacity-20 p-6 sm:w-96 bg-white bg-opacity-40">
      <div className="flex gap-4 items-center">
        <img src={imageUrl} className="rounded-full w-24" />
        <div className="flex flex-col items-start justify-center gap-2">
          <div>
            <h2 className="text-xl font-serif font-semibold">{name}</h2>
            <p className="text-lg leading-tight text-pa-primary opacity-75">
              {title}
            </p>
          </div>
          <span className="flex gap-2">
            <a href={linkedIn} target="_blank">
              <IconBrandLinkedin className="text-pa-primary hover:text-pa-red transition-all duration-300 ease-out" />
            </a>
            <a href={`mailto:${email}`} target="_blank">
              <IconMail className="text-pa-primary hover:text-pa-red transition-all duration-300 ease-out" />
            </a>
          </span>
        </div>
      </div>
      <div className="text-lg">{bio}</div>
    </div>
  );
}
