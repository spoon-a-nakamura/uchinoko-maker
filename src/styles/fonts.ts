import { css } from '@emotion/react';

export const fontFace = css`
  @import url('https://use.typekit.net/hms7zjc.css');
  @font-face {
    font-family: 'A1 Min Std Bold';
    font-style: normal;
    font-weight: 900;
    font-display: block;
    src: url('/assets/fonts/a1-min-std-bold.otf') format('opentype');
  }
`;

const a1MinStdBold = css`
  font-family: 'A1 Min Std Bold', serif;
  font-weight: 900;
  font-style: normal;
`;

const montserratRegular = css`
  font-family: montserrat, sans-serif;
  font-weight: 400;
  font-style: normal;
`;

const montserratMedium = css`
  font-family: montserrat, sans-serif;
  font-weight: 500;
  font-style: normal;
`;

const OperettaExtraLight = css`
  font-family: operetta-12, serif;
  font-weight: 200;
  font-style: normal;
`;

const OperettaRegular = css`
  font-family: operetta-12, serif;
  font-weight: 400;
  font-style: normal;
`;

const OperettaBold = css`
  font-family: operetta-12, serif;
  font-weight: 700;
  font-style: normal;
`;

export const fontFamilies = {
  a1MinStdBold,
  montserratRegular,
  montserratMedium,
  OperettaExtraLight,
  OperettaRegular,
  OperettaBold,
};
