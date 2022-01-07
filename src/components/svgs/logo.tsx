import React from 'react';

export const Logo = () => {
  return (
    <svg
      width="162"
      height="77"
      viewBox="0 0 162 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="logo"
    >
      <rect width="162" height="77" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_628_1518"
            transform="translate(-0.00242356) scale(0.001595 0.0033557)"
          />
        </pattern>
        <image
          id="image0_628_1518"
          width="630"
          height="298"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Logo;