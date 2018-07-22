module.exports = (stylesheet, menu, patterns) => {
  return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>styleER</title>
        <link rel="stylesheet" type="text/css" href="${stylesheet}"/>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/themes/blackboard.min.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/js/rainbow.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/js/language/html.min.js"></script>
    </head>
    <body>
        <div class="columns">
            <aside class="column pad-3" style="flex: 0 0 200px">${menu}</aside>
            <div class="column pad-top-3 pad-rgt-5">
            <h1 class="mrgn-top-0">FEDS</h1>
            <p class="text-size-l text-color-grey-light">Front-end Design System</p>
            ${patterns}
            </div>
        </div>
    </body>
    </html>`;
};
