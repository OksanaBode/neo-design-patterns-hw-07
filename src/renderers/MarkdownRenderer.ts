import { BaseRenderer } from "./BaseRenderer";

export class MarkdownRenderer extends BaseRenderer {
  // TODO: Implement the MarkdownRenderer class
  renderHeader(level:number, text:string): string {
    const hashes = '#'.repeat(level);
    return `${hashes} ${this.escape(text)}\n\n`;
  }
  renderParagraph(text:string): string {
    return `${this.escape(text)}\n\n`;
  }
  renderList(items:string[]): string {
    return items.map(i => `- ${this.escape(i)}`).join("\n") + "\n\n";
  }
}
