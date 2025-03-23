import { useStaticQuery, graphql } from "gatsby";

interface StoryContent {
  title: string;
  description: string;
  image: string;
}

export default function useStoryContent(): StoryContent {
  const data = useStaticQuery(graphql`
    query StoryPageQuery {
      contentfulOurStoryContent {
        title
        description {
          description
        }
        image {
          url
        }
      }
    }
  `);
  return {
    title: data.contentfulOurStoryContent.title,
    description: data.contentfulOurStoryContent.description.description,
    image: data.contentfulOurStoryContent.image.url,
  };
}
