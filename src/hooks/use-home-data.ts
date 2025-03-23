import { graphql, useStaticQuery } from "gatsby";

interface HomeData {
  title: string;
  shortDescription: string;
  callToActionText: string;
  callToActionLink: string;
  heroImage: string | null;
  companyLogos: string[] | null;
}

export default function useHomeData(): HomeData {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      contentfulHomePageContent {
        title
        shortDescription
        callToActionText
        callToActionLink
        heroImage {
          publicUrl
        }
        companyLogos {
          publicUrl
        }
      }
    }
  `);

  console.log(data);

  return {
    title: data.contentfulHomePageContent.title,
    shortDescription: data.contentfulHomePageContent.shortDescription,
    callToActionText: data.contentfulHomePageContent.callToActionText,
    callToActionLink: data.contentfulHomePageContent.callToActionLink,
    heroImage: data.contentfulHomePageContent.heroImage?.publicUrl || null,
    companyLogos:
      data.contentfulHomePageContent.companyLogos?.map(
        (logo: { publicUrl: string }) => logo.publicUrl
      ) || null,
  };
}
