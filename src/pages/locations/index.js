import * as React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../../components/SEO';

const AllLocationPage = ({ data }) => {
  const { allContentfulLocation } = data;
  const allLocations = allContentfulLocation.edges
    .reduce((acc, cur) => [...acc, cur.node.title.trim()], [])
    .join(', ');

  return (
    <>
      <SEO
        title="Locations"
        description={`We have offices at ${allLocations}`}
      />
      <main>
        <h1>Our Office locations</h1>
        <ul>
          {allContentfulLocation.edges.map((location, index) => (
            <Link to={location.node.slug} key={index}>
              <li>{location.node.title}</li>
            </Link>
          ))}
        </ul>
      </main>
    </>
  );
};

export default AllLocationPage;

export const query = graphql`
  query {
    allContentfulLocation {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
