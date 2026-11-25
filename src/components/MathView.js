import React, { useMemo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function MathView({
  latex = '',
  fallback = '',
  fontSize = 22,
  color = '#111113',
  minHeight = 72,
}) {
  const [height, setHeight] = useState(minHeight);

  const html = useMemo(() => {
    const formattedLatex = (latex || '').replace(
      /\\(iiint|iint|oiint)(?=_)/g,
      '\\$1\\limits'
    );
    const safeLatex = JSON.stringify(formattedLatex);
    const safeFallback = JSON.stringify(fallback || '');

    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 100%;
      height: 100%;
      background: transparent;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-user-select: none;
      user-select: none;
    }
    #math {
      display: inline-block;
      color: ${color};
      font-size: ${fontSize}px;
      line-height: 1.25;
      white-space: nowrap;
      padding: 4px 8px;
    }
    .katex-display {
      margin: 0 !important;
      display: inline-block !important;
    }
  </style>
</head>
<body>
  <div id="math"></div>
  <script>
    function fitAndReport() {
      var el = document.getElementById('math');
      if (!el) return;

      el.style.zoom = 1;
      var availW = Math.max(document.documentElement.clientWidth - 16, 120);
      var contentW = el.scrollWidth;
      var scale = 1;

      if (contentW > availW) {
        scale = Math.max(0.42, (availW / contentW) * 0.96);
        el.style.zoom = scale;
      }

      var rect = el.getBoundingClientRect();
      var finalH = Math.ceil(rect.height) + 20;
      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(String(finalH));
      }
    }

    function renderMath() {
      var el = document.getElementById('math');
      var latex = ${safeLatex};
      var fallback = ${safeFallback};
      try {
        if (window.katex && latex) {
          katex.render(latex, el, {
            displayMode: true,
            throwOnError: false,
            strict: false,
          });
        } else {
          el.textContent = fallback || latex;
        }
      } catch (e) {
        el.textContent = fallback || latex;
      }

      fitAndReport();
      setTimeout(fitAndReport, 150);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(fitAndReport);
      }
    }

    if (document.readyState === 'complete') {
      renderMath();
    } else {
      window.addEventListener('load', renderMath);
    }
    window.addEventListener('resize', fitAndReport);
  </script>
</body>
</html>`;
  }, [latex, fallback, fontSize, color]);

  return (
    <View style={[styles.container, { height: Math.max(minHeight, height) }]}>
      <WebView
        originWhitelist={['*']}
        source={{ html }}
        style={styles.webview}
        textZoom={100}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        bounces={false}
        javaScriptEnabled
        onMessage={(e) => {
          const parsed = Number(e.nativeEvent.data);
          if (!Number.isNaN(parsed) && parsed > 0) {
            setHeight(Math.max(minHeight, parsed));
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});