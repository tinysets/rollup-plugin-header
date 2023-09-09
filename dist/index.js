"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.header = void 0;
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
exports.header = header;
