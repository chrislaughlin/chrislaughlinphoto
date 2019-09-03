import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledLogAndProfile = styled.div`
  width: 150px;
  padding: 0px 35px 35px;
`

const LogAndProfile = ({
  logo,
  profile
}) => {
  return (
    <StyledLogAndProfile>
      <Img fluid={profile.image.childImageSharp.fluid} alt="Profile" />
      Chris Laughlin
      <Img fluid={logo.image.childImageSharp.fluid} alt="Logo" />
    </StyledLogAndProfile>
  );
};

LogAndProfile.propTypes = {};

export default LogAndProfile;

