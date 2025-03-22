export function createSchemaCustomization({ actions }) {
  const { createTypes } = actions;
  const typeDefs = `
    type ContentfulHomePageContent implements Node {
      title: String!
      shortDescription: String!
      callToActionText: String!
      callToActionLink: String!
      heroImage: ContentfulAsset @link(by: "id", from: "heroImage___NODE")
      companyLogos: [ContentfulAsset] @link(by: "id", from: "companyLogos___NODE")
    }
  `;
  createTypes(typeDefs);
}
