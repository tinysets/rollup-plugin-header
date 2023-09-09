export default function header(options: any = {}) {
  options.header = options.header ? options.header.toString() : '';
  options.footer = options.footer ? options.footer.toString() : '';
  return {
    name: 'header',
    renderChunk(code: string) {
      return options.header + code + options.footer
    }
  }
}
