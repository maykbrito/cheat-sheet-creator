import { Section } from "../models/Section";
import { Snippet } from "../models/Snippet";

import { Header } from "../components/Header";

const snip = new Snippet("Javascript");

// section
const REGEXS = new Section("Regular Expression Syntax");
REGEXS.addLine("^", "Start of string");
REGEXS.addLine("$", "End of string");
snip.add(REGEXS);

export function Javascript() {
  return (
    <>
      <Header title={snip.title} />
      {snip.elements.map((element) => (
        <section id={element.id} key={element.id}>
          <h2>{element.title}</h2>
          <ul>
            {element.lines.map((line) => (
              <li key={line.snippet}>
                <span>{line.snippet}</span>
                {line.description}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
