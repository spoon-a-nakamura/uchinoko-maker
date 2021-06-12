import { VFC } from 'react';
import styled from '@emotion/styled';
import Container from '../app/Container';
import { colors } from '../../styles/utils';

const Footer: VFC = () => {
  return (
    <Root>
      <Container>FOOTER</Container>
    </Root>
  );
};
export default Footer;

const Root = styled.div`
  background: ${colors.backGroundBlack};
  color: ${colors.textWhite};
`;
