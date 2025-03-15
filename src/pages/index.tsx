import { IconArrowRight } from "@tabler/icons-react";
import headFactory from "../utils/head-factory";
import ImageScroller from "../components/ImageScroller";

export default function Home() {
  return (
    <section className="flex flex-col w-full h-[calc(100vh-96px)]">
      <div className="flex px-12 flex-1">
        <div className="flex flex-col items-start justify-center gap-8 h-full w-1/2 xl:w-1/3">
          <h1 className="text-5xl font-bold font-serif">
            Placeholder hero title: something awesome
          </h1>
          <p className="text-lg">
            Some text describing why you should go with us. How are we
            different? Find out by booking a meeting or viewing our services. We
            should also explain other stuff here. It should be about this long.
          </p>
          <a className="group font-medium text-lg hover:text-pa-orange transition-all duration-300 ease-out flex items-center cursor-pointer">
            See something
            <IconArrowRight className="ml-2 text-pa-orange group-hover:translate-x-2 transition-all ease-out duration-300" />
          </a>
        </div>
      </div>
      <div className="h-32 bg-pa-green w-full flex items-center">
        <ImageScroller
          imageSrcs={[
            "img/meta-logo.png",
            "img/github-logo.png",
            "img/google-logo.webp",
            "img/netflix-logo.png",
          ]}
          direction="left"
          delay={50}
        />
      </div>
    </section>
  );
}

export const Head = headFactory();
