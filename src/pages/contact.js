import React from 'react';
import { graphql } from 'gatsby';
import ContactForm from '../components/ContactForm';
import { Box } from '@chakra-ui/react';

const ContactPage = ({ data }) => {
  return (
    <main>
      <Box p={16}>
        <ContactForm data={data} />
      </Box>
    </main>
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
