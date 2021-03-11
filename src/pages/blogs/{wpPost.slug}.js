import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../../components/SEO';
import { Heading } from '@chakra-ui/react';

export default function BlogPage({ data }) {
  const { wpPost } = data;
  console.log(wpPost);
  return (
    <>
      <SEO title="home" />
      <Heading as="h1" size="2xl">
        {wpPost.title}
      </Heading>
      <div dangerouslySetInnerHTML={{ __html: wpPost.content }} />
    </>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      title
      content
    }
  }
`;
