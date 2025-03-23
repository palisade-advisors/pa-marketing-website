import { useStaticQuery, graphql } from "gatsby";

interface GeneralData {
  logo: string;
  ctaText: string;
  ctaLink: string;
}

export default function useGeneralData() {
  const data = useStaticQuery(graphql`
    query {
      contentfulGeneral {
        callToActionLink
        callToActionText
        headerLogo {
          url
        }
      }
    }
  `);

  return {
    logo: data.contentfulGeneral.headerLogo.url,
    ctaText: data.contentfulGeneral.callToActionText,
    ctaLink: data.contentfulGeneral.callToActionLink,
  } as GeneralData;
}
