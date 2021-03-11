import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import {
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
} from '@chakra-ui/react';

export default function BlogPage({ data }) {
  const { wpPost } = data;
  console.log(wpPost);
  return (
    <>
      {/* TODO: some seo value is null */}
      <SEO
        title={wpPost.seo?.title | wpPost.title}
        description={wpPost.seo?.metaDesc | ''}
      />
      <Stack pacing={6}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/home">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/blogs">Blogs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{wpPost.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading as="h1" size="2xl">
          {wpPost.title}
        </Heading>
        <div dangerouslySetInnerHTML={{ __html: wpPost.content }} />
      </Stack>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      title
      content
      seo {
        title
        metaDesc
      }
    }
  }
`;
