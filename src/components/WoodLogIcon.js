import React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';

export default function WoodLogIcon({ size = 18, color = '#111113', strokeWidth = 2.1 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Main cylindrical log body */}
      <Path
        d="M5.5 7H18.5C20.43 7 22 9.24 22 12C22 14.76 20.43 17 18.5 17H5.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Cut wood end */}
      <Ellipse
        cx="5.5"
        cy="12"
        rx="3"
        ry="5"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      {/* Inner growth ring */}
      <Ellipse
        cx="5.5"
        cy="12"
        rx="1"
        ry="2"
        stroke={color}
        strokeWidth={strokeWidth * 0.8}
      />
      {/* Bark grain & small branch knot */}
      <Path
        d="M11 10.5H16.5M12.5 14H18.5M14.5 7L16.5 4.5"
        stroke={color}
        strokeWidth={strokeWidth * 0.9}
        strokeLinecap="round"
      />
    </Svg>
  );
}