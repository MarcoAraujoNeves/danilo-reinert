const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      'There was an error loading your blog posts',
      result.errors
    )

    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    reporter.warn('No blog posts found')
    return
  }

  const component = path.resolve('./src/components/Post.js')
  console.log('\nGenerating blog posts:')

  posts.forEach((post, index) => {
    const previousPostId = index === 0 ? null : posts[index - 1].id
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

    console.log(`[${index + 1}/${posts.length}]: ${post.fields.slug}`)

    createPage({
      path: post.fields.slug,
      component,
      context: {
        id: post.id,
        previousPostId,
        nextPostId,
      },
    })
  })

  console.log('')
}
