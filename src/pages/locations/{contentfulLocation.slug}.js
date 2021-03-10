import * as React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Stack,
} from '@chakra-ui/react';
import SEO from '../../components/SEO';

const CityPage = ({ data }) => {
  const { contentfulLocation } = data;
  const image = getImage(contentfulLocation.heroImage);
  return (
    <>
      <SEO
        title={`Location - ${contentfulLocation.title}`}
        description={`We have offices at `}
      />
      <main>
        <GatsbyImage
          image={image}
          alt={contentfulLocation.title}
          layout="fullwidth"
          aspectRatio={4 / 3}
        />
        <Stack spacing={6}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/home">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/locations">Locations</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">
                {contentfulLocation.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as="h1" size="3xl">
            {contentfulLocation.title}
          </Heading>
          <ReactMarkdown source={contentfulLocation.description.description} />
        </Stack>
      </main>
    </>
  );
};

export default CityPage;

export const query = graphql`
  query($slug: String!) {
    contentfulLocation(slug: { eq: $slug }) {
      title
      description {
        description
      }
      heroImage {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          layout: FULL_WIDTH
        )
      }
    }
  }
`;
