import type { FC } from 'react';
import styled from 'styled-components';

export const PageHeader: FC = () => (
  <Styled.Header>
    <h1>Portfolio</h1>
    <nav>
      <menu>
        <li>About</li>
        <li>Projects</li>
        <li>Blog</li>
      </menu>
    </nav>
  </Styled.Header>
);

const Styled = {
  Header: styled.header`
    background-color: #d9d9d9;
  `,
};
