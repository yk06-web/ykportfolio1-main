const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap");
        
        body {
          margin: 0;
          padding: 0;
          width: 1200px;
          height: 630px;
          background-color: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo {
          font-family: "Cormorant Garamond", serif;
          font-size: 140px;
          color: #ffffff;
          font-weight: 500;
          letter-spacing: -0.01em;
        }

        .logo span {
          color: #C9A87C;
        }
      </style>
    </head>
    <body>
      <div class="logo">YK Digital<span>s</span></div>
    </body>
    </html>
  `;

  fs.writeFileSync('temp-og.html', html);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  
  // Navigate to local file to ensure fonts can be loaded and rendered
  await page.goto('file://' + __dirname + '/temp-og.html', { waitUntil: 'networkidle0' });
  
  // Wait a bit just in case
  await new Promise(resolve => setTimeout(resolve, 500));
  
  await page.screenshot({ path: 'public/og-image.png', type: 'png' });

  await browser.close();
  fs.unlinkSync('temp-og.html');
  console.log('OG Image generated successfully!');
})();
