"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function header(options) {
    if (options === void 0) { options = {}; }
    options.header = options.header ? options.header.toString() : '';
    options.footer = options.footer ? options.footer.toString() : '';
    return {
        name: 'header',
        renderChunk: function (code) {
            return options.header + code + options.footer;
        }
    };
}
exports.default = header;
