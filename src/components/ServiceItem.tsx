import CallToAction from "./CallToAction";

interface ServiceItemProps {
  title: string;
  description: string;
  imageUrl?: string;
  align?: "left" | "right";
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ServiceItem({
  title,
  description,
  imageUrl,
  align = "left",
}: ServiceItemProps) {
  if (!imageUrl) {
    return (
      <div className="flex flex-col w-full md:w-1/2 gap-4">
        <h1 className="text-4xl font-serif font-semibold text-pa-primary">
          {title}
        </h1>
        <p>{description}</p>
        <CallToAction text="Schedule a call to learn more" href="test" />
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
          {title}
        </h1>
        <p>{description}</p>
        <CallToAction text="Schedule a call to learn more" href="test" />
      </div>
      <div className="flex flex-col w-full md:w-1/2 h-[50vh] bg-pa-green">
        <p>image here</p>
      </div>
    </div>
  );
}
