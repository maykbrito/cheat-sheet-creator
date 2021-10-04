import { SectionProps } from "./Section";

export class Snippet {
  snippets: any[];
  title: any;

  constructor(title: string) {
    this.title = title;
    this.snippets = [];
  }

  add(section: SectionProps) {
    this.snippets.push(section);
  }

  create(id: string, section: SectionProps) {
    const element = document.createElement("section");
    element.setAttribute("id", id);

    const h2 = document.createElement("h2");
    h2.innerText = section.title;

    const ul = document.createElement("ul");

    for (let line of section.lines) {
      const li = document.createElement("li");
      li.innerHTML = `<span>${line?.snippet}</span> ${line?.description}`;
      ul.append(li);
    }

    element.append(h2);
    element.append(ul);
    return element;
  }

  get elements() {
    const elements = [];
    for (let snip of this.snippets) {
      const id = Object.keys(snip)[0];
      // const element = this.create(id, snip);
      elements.push({
        id,
        title: snip.title,
        lines: snip.lines
      });
    }
    return elements;
  }
}
