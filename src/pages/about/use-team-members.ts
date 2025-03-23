import { useStaticQuery, graphql } from "gatsby";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  email: string;
  linkedIn: string;
}

export default function useTeamMembers(): TeamMember[] {
  const data = useStaticQuery(graphql`
    query TeamMembersQuery {
      allContentfulTeamMember {
        nodes {
          fullName
          bio {
            bio
          }
          email
          fullName
          headshot {
            publicUrl
          }
          linkedIn
          title
        }
      }
    }
  `);
  return data.allContentfulTeamMember.nodes.map((node: any) => ({
    name: node.fullName,
    title: node.title,
    bio: node.bio.bio,
    imageUrl: node.headshot.publicUrl,
    email: node.email,
    linkedIn: node.linkedIn,
  }));
}
