import { VFC } from 'react';
import styled from '@emotion/styled';
import Meta from '../../shared/Meta';
import { siteTitle } from '../../../pages/_app';
import Main from './Main';

const Home: VFC = () => (
  <>
    <Meta title={`${siteTitle}`} description="" ogType="website" />
    <Root>
      <Main />
    </Root>
  </>
);

export default Home;

const Root = styled.div``;
