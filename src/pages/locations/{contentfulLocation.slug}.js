import * as React from 'react';

const CityPage = ({ data }) => {
  console.log(data);
  return (
    <main>
      <h1>City</h1>
    </main>
  );
};

export default CityPage;

export const query = graphql`
  query {
    contentfulLocation {
      title
      description {
        description
      }
    }
  }
`;
