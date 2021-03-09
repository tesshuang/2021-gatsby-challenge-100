import * as React from 'react';
import { graphql, Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';

const CityPage = ({ data }) => {
  console.log(data);
  const { contentfulLocation } = data;
  return (
    <main>
      <header>
        <Link to="/home">Go back to Home</Link>
      </header>
      <h1>{contentfulLocation.title}</h1>
      <ReactMarkdown source={contentfulLocation.description.description} />
    </main>
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
    }
  }
`;
