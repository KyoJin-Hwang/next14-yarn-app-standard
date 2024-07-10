/** @jsxImportSource @emotion/react */

'use client';

import { css } from '@emotion/react';

const Home = () => {
  return (
    <div css={test}>
      <div css={divStyle}>
        <a css={aStyle} href="/test">
          test
        </a>
      </div>
      <div css={divStyle}>
        <a css={aStyle} href="/test/order">
          order
        </a>
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
