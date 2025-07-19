import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { PageFooter, PageHeader } from './index';

type PageWrapperProps = {
  title?: string;
  children: ReactNode;
};

export const PageWrapper: FC<PageWrapperProps> = ({ title = 'Portfolio', children }) => (
  <>
    <Head>
      <title>{`${title} | Victoria Morais`}</title>
    </Head>
    <Styled.Main>
      <PageHeader />
      <Styled.Content>{children}</Styled.Content>
      <PageFooter />
    </Styled.Main>
  </>
);

const Styled = {
  Main: styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `,

  Content: styled.div`
    flex-grow: 1;
  `,
};
