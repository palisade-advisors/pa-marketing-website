import headFactory from "../utils/head-factory";
import ImageScroller from "../components/ImageScroller";
import CallToAction from "../components/CallToAction";
import useHomeData from "../hooks/use-home-data";

export default function Home() {
  const homeData = useHomeData();
  console.log(homeData);

  return (
    <section className="flex flex-col w-full min-h-[calc(100vh-96px)] items-center gap-12">
      <div className="flex flex-1 px-4 md:px-12">
        <div className="flex flex-col items-start justify-center gap-8 h-full w-full md:w-1/2 xl:w-1/3">
          <h1 className="text-5xl font-bold font-serif">{homeData.title}</h1>
          <p className="text-lg">{homeData.shortDescription}</p>
          <CallToAction
            text={homeData.callToActionText}
            href={homeData.callToActionLink}
          />
        </div>
        <div className="flex flex-1 w-full items-center md:w-1/2 xl:w-2/3 h-full">
          {homeData.heroImage && (
            <img
              src={homeData.heroImage}
              alt="Hero"
              className="object-contain w-full h-[50vh]"
            />
          )}
        </div>
      </div>
      {homeData.companyLogos && (
        <div className="h-32 bg-pa-green w-full flex items-center">
          <ImageScroller
            imageSrcs={homeData.companyLogos}
            direction="left"
            delay={50}
          />
        </div>
      )}
    </section>
  );
}

export const Head = headFactory();
