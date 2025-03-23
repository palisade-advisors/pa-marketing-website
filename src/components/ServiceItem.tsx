import CallToAction from "./CallToAction";

interface ServiceItemProps {
  name: string;
  description: string;
  image?: string;
  align?: "left" | "right";
  ctaText?: string | null;
  ctaLink?: string | null;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ServiceItem({
  name,
  description,
  image,
  align = "left",
  ctaText,
  ctaLink,
}: ServiceItemProps) {
  if (!image) {
    return (
      <div className="flex flex-col w-full md:w-1/2 gap-4">
        <h1 className="text-4xl font-serif font-semibold text-pa-primary">
          {name}
        </h1>
        <p>{description}</p>
        {ctaText && ctaLink && <CallToAction text={ctaText} href={ctaLink} />}
      </div>
    );
  }

  return (
    <div
      className={classNames(
        "flex w-full items-center gap-12 py-12 border-b flex-col",
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      <div className="flex flex-col w-full md:w-1/2 gap-4">
        <h1 className="text-4xl font-serif font-semibold text-pa-primary">
          {name}
        </h1>
        <p>{description}</p>
        {ctaText && ctaLink && <CallToAction text={ctaText} href={ctaLink} />}
      </div>
      <div className="flex flex-col w-full md:w-1/2 h-[50vh] bg-pa-green">
        {image && (
          <img src={image} alt={name} className="object-cover h-full w-full" />
        )}
      </div>
    </div>
  );
}
