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
            <aside class="column flex-col-1-4th">${menu}</aside>
            <div class="column">
            <h1>FEDS</h1>
            <p>Front-end Design System</p>
            ${patterns}
            </div>
        </div>
    </body>
    </html>`;
};