import { SectionProps } from './Section'

export interface ISnippetState {
  title: string
  lines: SectionProps['lines']
}

export interface ISnippetElements {
  id: string
  title: string
  lines: SectionProps['lines']
}

export class Snippet {
  snippets: ISnippetState[]
  title: string

  constructor(title: string) {
    this.title = title
    this.snippets = []
  }

  add(section: SectionProps) {
    this.snippets.push(section)
  }

  get elements(): ISnippetElements[] {
    const elements = []
    for (const snip of this.snippets) {
      const id = snip?.title.replace(/\s/g, '-').toLocaleLowerCase()
      elements.push({
        id,
        title: snip?.title,
        lines: snip?.lines
      })
    }
    return elements
  }
}
