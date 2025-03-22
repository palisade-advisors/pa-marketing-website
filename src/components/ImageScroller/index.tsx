import Marquee from "react-fast-marquee";
import { useResponsive } from "../../hooks/use-responsive";
import "./styles.css";

interface ImageScrollerProps {
  imageSrcs: string[];
  direction: "left" | "right";
  delay?: number;
}

export default function ImageScroller({
  imageSrcs,
  direction,
  delay,
}: ImageScrollerProps) {
  const { isMobile } = useResponsive();
  return (
    <Marquee
      direction={direction}
      autoFill={true}
      speed={25}
      gradient={true}
      delay={delay}
      gradientWidth={isMobile ? "50px" : "200px"}
    >
      {imageSrcs.map((src, i) => (
        <img
          key={i}
          src={src}
          className="w-48 object-contain mx-12 grayscale opacity-40"
        />
      ))}
    </Marquee>
  );
}
