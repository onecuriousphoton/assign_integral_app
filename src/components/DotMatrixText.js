import React, { useMemo } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const GLYPHS = {
  A: ['00100', '01010', '10001', '10001', '11111', '10001', '10001'],
  B: ['11110', '10001', '10001', '11110', '10001', '10001', '11110'],
  C: ['01110', '10001', '10000', '10000', '10000', '10001', '01110'],
  D: ['11100', '10010', '10001', '10001', '10001', '10010', '11100'],
  E: ['1111', '1000', '1000', '1110', '1000', '1000', '1111'],
  F: ['1111', '1000', '1000', '1110', '1000', '1000', '1000'],
  G: ['01110', '10001', '10000', '10011', '10001', '10001', '01111'],
  H: ['10001', '10001', '10001', '11111', '10001', '10001', '10001'],
  I: ['111', '010', '010', '010', '010', '010', '111'],
  J: ['0011', '0001', '0001', '0001', '1001', '1001', '0110'],
  K: ['1001', '1010', '1100', '1100', '1010', '1001', '1001'],
  L: ['1000', '1000', '1000', '1000', '1000', '1000', '1111'],
  M: ['10001', '11011', '10101', '10101', '10001', '10001', '10001'],
  N: ['10001', '11001', '10101', '10011', '10001', '10001', '10001'],
  O: ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
  P: ['11110', '10001', '10001', '11110', '10000', '10000', '10000'],
  Q: ['01110', '10001', '10001', '10001', '10101', '10010', '01101'],
  R: ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
  S: ['01111', '10000', '10000', '01110', '00001', '00001', '11110'],
  T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
  U: ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
  V: ['10001', '10001', '10001', '10001', '01010', '01010', '00100'],
  W: ['10001', '10001', '10001', '10101', '10101', '11011', '10001'],
  X: ['10001', '10001', '01010', '00100', '01010', '10001', '10001'],
  Y: ['10001', '10001', '01010', '00100', '00100', '00100', '00100'],
  Z: ['11111', '00001', '00010', '00100', '01000', '10000', '11111'],
  '0': ['01110', '10001', '10011', '10101', '11001', '10001', '01110'],
  '1': ['010', '110', '010', '010', '010', '010', '111'],
  '2': ['01110', '10001', '00001', '00110', '01000', '10000', '11111'],
  '3': ['01110', '10001', '00001', '00110', '00001', '10001', '01110'],
  '4': ['00010', '00110', '01010', '10010', '11111', '00010', '00010'],
  '5': ['11111', '10000', '11110', '00001', '00001', '10001', '01110'],
  '6': ['01110', '10000', '11110', '10001', '10001', '10001', '01110'],
  '7': ['11111', '00001', '00010', '00100', '01000', '01000', '01000'],
  '8': ['01110', '10001', '10001', '01110', '10001', '10001', '01110'],
  '9': ['01110', '10001', '10001', '01111', '00001', '00010', '01100'],
  ':': ['0', '0', '1', '0', '1', '0', '0'],
  '/': ['001', '001', '010', '010', '010', '100', '100'],
  '-': ['000', '000', '000', '111', '000', '000', '000'],
  '.': ['0', '0', '0', '0', '0', '0', '1'],
  ' ': ['0', '0', '0', '0', '0', '0', '0'],
};

function DotMatrixText({
  text = '',
  dotSize = 2.4,
  gap = 0.95,
  color = '#111113',
  ghostColor = null,
  style,
}) {
  const { svgWidth, svgHeight, activePath, ghostPath } = useMemo(() => {
    const pitch = dotSize + gap;
    const r = dotSize / 2;
    const d = dotSize;
    const pad = Math.ceil(r) + 2; // Prevents edge clipping on all 4 sides
    const charSpacing = pitch * 0.72; // Compact Nothing OS tracking
    const chars = String(text).toUpperCase().split('');

    let cursorX = pad;
    const activeParts = [];
    const ghostParts = [];

    chars.forEach((ch, idx) => {
      const matrix = GLYPHS[ch] || GLYPHS[' '];
      const cols = matrix[0].length;

      for (let row = 0; row < matrix.length; row++) {
        const cy = pad + row * pitch + r;
        for (let col = 0; col < cols; col++) {
          const on = matrix[row][col] === '1';
          if (on || (ghostColor && ch !== ' ')) {
            const cx = cursorX + col * pitch + r;
            const circleCmd = `M${(cx - r).toFixed(2)} ${cy.toFixed(2)}a${r.toFixed(2)} ${r.toFixed(
              2
            )} 0 1 0 ${d.toFixed(2)} 0a${r.toFixed(2)} ${r.toFixed(2)} 0 1 0 ${(-d).toFixed(2)} 0`;
            if (on) activeParts.push(circleCmd);
            else ghostParts.push(circleCmd);
          }
        }
      }

      cursorX += cols * pitch - gap + (idx < chars.length - 1 ? charSpacing : 0);
    });

    const contentHeight = 7 * pitch - gap;
    return {
      svgWidth: Math.ceil(cursorX + pad),
      svgHeight: Math.ceil(contentHeight + pad * 2),
      activePath: activeParts.join(''),
      ghostPath: ghostParts.join(''),
    };
  }, [text, dotSize, gap, ghostColor]);

  return (
    <View style={style}>
      <Svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        {!!ghostPath && !!ghostColor && <Path d={ghostPath} fill={ghostColor} />}
        {!!activePath && <Path d={activePath} fill={color} />}
      </Svg>
    </View>
  );
}

export default React.memo(DotMatrixText);