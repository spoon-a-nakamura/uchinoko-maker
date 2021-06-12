import { VFC } from 'react';
import styled from '@emotion/styled';
import Meta from '../../shared/Meta';
import Container from '../../app/Container';

const Home: VFC = () => (
  <>
    <Meta title="" description="" ogType="website" />
    <Root>
      <Container>HOME</Container>
    </Root>
  </>
);

export default Home;

const Root = styled.div``;