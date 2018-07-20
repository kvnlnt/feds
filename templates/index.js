module.exports = (stylesheet, menu, patterns) => {
  return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>styleER</title>
        <link rel="stylesheet" type="text/css" href="${stylesheet}"/>
    </head>
    <body>
        <div class="columns">
            <aside class="column flex-col-1-4th pad-3">${menu}</aside>
            <div class="column pad-top-3">
            <h1 class="mrgn-top-0">FEDS</h1>
            <p>Front-end Design System</p>
            ${patterns}
            </div>
        </div>
    </body>
    </html>`;
};
