import { VFC } from 'react';
import styled from '@emotion/styled';
// import Link from 'next/link';
// import { sppx, pcpx, pcfz } from '../../styles/sizes';
// import { fontFamilies } from '../../styles/fonts';
// import { mediaQueries } from '../../styles/breakPoints';

// type navListsProps = {
//   label: string;
//   url: string;
//   blank?: boolean;
// }[];

const Header: VFC = () => {
  return (
    <Root>
      <Contents>
        <Logo src="/assets/images/common/header/logo.svg" alt="" />
      </Contents>
    </Root>
  );
};

export default Header;

const Root = styled.header`
  margin-bottom: auto;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  margin: 20px;
  width: 100%;
  max-width: 60%;
`;
