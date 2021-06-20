const container = document.getElementById('container');
const frame = document.createElement('iframe');
frame.style.cssText = 'display:none !important';
container.appendChild(frame);

const doc = frame.contentDocument;
if (doc) {
  const head = `<head></head>`;
  const body = `<body><div id="root"></div></body>`;
  doc.open('text/html', 'replace');
  doc.write(`<!doctype html><html lang="en">${head}${body}</html>`);
  doc.close();

  const addScript = (src: string) => {
    const script = doc.createElement('script');
    script.src = `/assets/${src}`;
    doc.body.appendChild(script);
  };

  addScript(`runtime.js`);
  addScript(`app.js`);
}
