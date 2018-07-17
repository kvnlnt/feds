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
            <aside class="column flex-col-4">${menu}</aside>
            <div class="column">${body}</div>
        </div>
    </body>
    </html>`;
};