import { VFC } from 'react';
import styled from '@emotion/styled';
import { colors } from '../../styles/utils';

const Footer: VFC = () => {
  return <Root>FOOTER</Root>;
};
export default Footer;

const Root = styled.div`
  background: ${colors.backGroundBlack};
  color: ${colors.textWhite};
`;
