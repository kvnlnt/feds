module.exports = {
    ok: function (msg) {
        return '\x1b[32m✓\x1b[0m ' + msg;
    },
    error: function (msg) {
        return '\x1b[31mX\x1b[0m ' + msg;
    }
};