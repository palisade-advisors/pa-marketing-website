import { IconArrowRight } from "@tabler/icons-react";

type CallToActionProps = {
  text: string;
} & (
  | {
      href?: never;
      onClick: () => void;
    }
  | {
      href: string;
      onClick?: never;
    }
);

export default function CallToAction({
  text,
  href,
  onClick,
}: CallToActionProps) {
  if (href)
    return (
      <a
        className="group font-medium text-lg hover:text-pa-orange transition-all duration-300 ease-out flex items-center cursor-pointer"
        href={href}
      >
        {text}
        <IconArrowRight className="ml-2 text-pa-orange group-hover:translate-x-2 transition-all ease-out duration-300" />
      </a>
    );

  return (
    <button
      className="group font-medium text-lg hover:text-pa-orange transition-all duration-300 ease-out flex items-center cursor-pointer"
      onClick={onClick}
    >
      {text}
      <IconArrowRight className="ml-2 text-pa-orange group-hover:translate-x-2 transition-all ease-out duration-300" />
    </button>
  );
}
