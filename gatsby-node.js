/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      designs: allStrapiDesigns {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.designs.nodes.forEach(design => {
    createPage({
      path: `/work/${design.slug}`,
      component: path.resolve(`src/templates/work-template.js`),
      exact: true,
      context: {
        slug: design.slug,
      },
    })
  })
}
