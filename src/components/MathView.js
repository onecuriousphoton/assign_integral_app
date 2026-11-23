import React, { useMemo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

function MathView({
  latex = '',
  fallback = '',
  fontSize = 24,
  color = '#111113',
  minHeight = 68,
}) {
  const [height, setHeight] = useState(minHeight);

  const html = useMemo(() => {
    const safeLatex = JSON.stringify(latex);
    const safeFallback = String(fallback).replace(/</g, '<').replace(/>/g, '>');
    return `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body {
        background: transparent;
        width: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: ${minHeight}px;
      }
      #math {
        color: ${color};
        font-size: ${fontSize}px;
        font-family: Georgia, serif;
        text-align: center;
        padding: 8px 6px;
        max-width: 100%;
      }
      .katex-display { margin: 0 !important; }
    </style>
  </head>
  <body>
    <div id="math">${safeFallback}</div>
    <script>
      function renderMath() {
        var el = document.getElementById('math');
        if (window.katex) {
          try {
            window.katex.render(${safeLatex}, el, {
              displayMode: true,
              throwOnError: false,
              strict: false
            });
          } catch (e) {}
        }
        setTimeout(function() {
          var h = Math.ceil(document.body.scrollHeight);
          if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(String(h));
          }
        }, 40);
      }
      if (document.readyState === 'complete') renderMath();
      else window.addEventListener('load', renderMath);
    </script>
  </body>
</html>`;
  }, [latex, fallback, fontSize, color, minHeight]);

  return (
    <View style={[styles.wrap, { height: Math.max(minHeight, height) }]} pointerEvents="none">
      <WebView
        originWhitelist={['*']}
        source={{ html }}
        style={styles.webview}
        scrollEnabled={false}
        bounces={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        javaScriptEnabled
        onMessage={(e) => {
          const next = Number(e.nativeEvent.data);
          if (!Number.isNaN(next) && next > 20 && next < 340) {
            setHeight(next);
          }
        }}
      />
    </View>
  );
}

export default React.memo(MathView);

const styles = StyleSheet.create({
  wrap: { width: '100%', overflow: 'hidden' },
  webview: { backgroundColor: 'transparent', opacity: 0.99 },
});