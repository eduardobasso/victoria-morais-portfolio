import type { FC } from 'react';
import styled from 'styled-components';

export const PageFooter: FC = () => (
  <Styled.Footer>
    <span>Developed with love by</span>
    <Styled.Avatar
      src="/images/dev-8bit.png"
      alt="Eduardo Basso (AKA the developer)'s photo in 8-bit style"
      width={24}
      height={24}
    />
    <a href="https://github.com/eduardobasso" target="_blank">
      Eduardo Basso
    </a>
  </Styled.Footer>
);

const Styled = {
  Footer: styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background-color: #d9d9d9;
    padding: 12px;
  `,

  Avatar: styled.img`
    border-radius: 50%;
  `,
};
