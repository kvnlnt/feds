module.exports = (stylesheet, menu, body) => {
  return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>styleER</title>
        <link rel="stylesheet" type="text/css" href="${stylesheet}"/>
    </head>
    <body>
        <div class="columns">
            <div class="column column--4">${menu}</div>
            <div class="column column--8">${body}</div>
        </div>
    </body>
    </html>`;
};
