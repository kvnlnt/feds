module.exports = (stylesheet, menu, patterns) => {
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>FEDS</title>
        <link rel="stylesheet" type="text/css" href="${stylesheet}"/>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/themes/blackboard.min.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/js/rainbow.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/js/language/html.min.js"></script>
    </head>
    <body>
        <div class="columns">
            <aside class="column pad-m" style="flex: 0 0 200px">${menu}</aside>
            <div class="column pad-top-m pad-rgt-l">
            <h1 class="mrgn-top-none">FEDS</h1>
            <p class="text-size-l text-color-grey-light">Front-end Design System</p>
            ${patterns}
            </div>
        </div>
    </body>
    </html>`;
};