import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../../components/SEO';

export default function AllBlogsPage({ data }) {
  const { allWpPost } = data;
  return (
    <>
      <SEO title="home" />
      <h1>My WordPress Blog</h1>
      {allWpPost.nodes.map((node, index) => (
        <div key={index}>
          <Link to={node.slug}>{node.title}</Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </>
  );
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`;
