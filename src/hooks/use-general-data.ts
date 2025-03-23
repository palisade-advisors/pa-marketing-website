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
          publicUrl
        }
      }
    }
  `);

  return {
    logo: data.contentfulGeneral.headerLogo.publicUrl,
    ctaText: data.contentfulGeneral.callToActionText,
    ctaLink: data.contentfulGeneral.callToActionLink,
  } as GeneralData;
}
