import React from 'react';
import { graphql } from 'gatsby';
import ContactForm from '../components/ContactForm';
import { Box } from '@chakra-ui/react';
import SEO from '../components/SEO';

const ContactPage = ({ data }) => {
  return (
    <>
      <SEO title="About" description="Feel free to reach out" />
      <main>
        <Box p={16}>
          <ContactForm data={data} />
        </Box>
      </main>
    </>
  );
};

export const query = graphql`
  {
    formiumForm(slug: { eq: "contact" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
  }
`;

export default ContactPage;
