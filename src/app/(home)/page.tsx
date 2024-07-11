/** @jsxImportSource @emotion/react */

'use client';

import { css } from '@emotion/react';
import Link from 'next/link';

const Home = () => {
  return (
    <div css={test}>
      <div css={divStyle}>
        <Link css={aStyle} href="/test">
          test
        </Link>
      </div>
      <div css={divStyle}>
        <Link css={aStyle} href="/test/order">
          order
        </Link>
      </div>
    </div>
  );
};
const test = css`
  display: flex;
  gap: 20px;
  flex-direction: column;
  background-color: blue;
  height: 100vh;
  font-size: 40px;
`;
const divStyle = css`
  width: 50%;
  border: 1px solid black;
`;
const aStyle = css`
  color: #d831ca;
`;
export default Home;
