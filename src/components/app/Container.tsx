import { ReactNode, VFC } from 'react';
import styled from '@emotion/styled';

type ContainerProps = {
  children: ReactNode;
};
const Container: VFC<ContainerProps> = ({ children }) => (
  <Root>{children}</Root>
);

export default Container;

const Root = styled.div`
  margin: 0 auto;
  max-width: 500px;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;
