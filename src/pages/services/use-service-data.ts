import { graphql, useStaticQuery } from "gatsby";
import { useMemo } from "react";

export interface ServiceData {
  name: string;
  description: string;
  image?: string;
  callToActionText: string | null;
  callToActionLink: string | null;
}

export default function useServiceData() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulService {
        nodes {
          callToActionLink
          callToActionText
          description {
            description
          }
          image {
            publicUrl
          }
          name
        }
      }
    }
  `);

  const nodes = useMemo(
    () => data.allContentfulService.nodes.reverse(),
    [data.allContentfulService.nodes]
  );

  return nodes.map((node: any) => ({
    name: node.name,
    description: node.description.description,
    image: node.image?.publicUrl,
    callToActionText: node.callToActionText,
    callToActionLink: node.callToActionLink,
  })) as ServiceData[];
}
