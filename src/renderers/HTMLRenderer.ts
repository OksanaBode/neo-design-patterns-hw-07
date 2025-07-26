import { BaseRenderer } from "./BaseRenderer";

export class HTMLRenderer extends BaseRenderer {
   renderHeader(level:number, text:string): string {
    const lvl = Math.min(level,6);
    return `<h${lvl}>${this.escape(text)}</h${lvl}>\n\n`;
  }
  renderParagraph(text:string): string {
    return `<p>${this.escape(text)}</p>\n\n`;
  }
  renderList(items:string[]): string {
    const lis = items.map(i => `<li>${this.escape(i)}</li>`).join("\n");
    return `<ul>\n${lis}\n</ul>\n\n`;
  }
  wrapDocument(content:string): string {
    return `
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Document</title></head><body>
${content}
</body></html>`;
  }  
}
