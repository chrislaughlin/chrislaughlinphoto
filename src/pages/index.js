import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';
import LogAndProfile from '../components/logoAndProfile/logoAndProfile';

const Index = ({ data }) => {
  console.log(data);
  const gallery = data.allInstaNode.edges.map(edge => {
    return {
      image: edge.node.localFile
    }
  })

  return (
    <Layout>
      <LogAndProfile
        logo={data.homeJson.gallery.find(img => img.title === 'Logo')}
        profile={data.homeJson.gallery.find(img => img.title === 'Profile')}
      />
      <Gallery items={gallery} />
    </Layout>
  )
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      gallery {
        title
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    allInstaNode {
        edges {
          node {
            preview
            original
            timestamp
            caption
            localFile {
              childImageSharp {
                fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
  }
`;
