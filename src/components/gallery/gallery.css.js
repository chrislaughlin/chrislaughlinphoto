import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  width: 70vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  padding: 0px 4rem 0;
  margin: 0px 0 2rem;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
