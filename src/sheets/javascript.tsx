import { Section } from "../models/Section";
import { Snippet } from "../models/Snippet";

import { Cheatsheet } from "../components/Cheatsheet";

const snip = new Snippet("Javascript");

// section
const REGEXS = new Section("Regular Expression Syntax");
REGEXS.addLine("^", "Start of string");
REGEXS.addLine("$", "End of string");
snip.add(REGEXS);

export function Javascript() {
  return <Cheatsheet title={snip.title} elements={snip.elements} />;
}
