export type SectionProps = {
  title: string
  lines: [
    {
      snippet?: string
      description?: string
    }?
  ]
}

export class Section {
  data: SectionProps['lines']
  title: string

  constructor(title: string) {
    this.data = []
    this.title = title
  }

  addLine(snippet: string, description: string) {
    this.data.push({ snippet, description })
  }

  get lines(): SectionProps['lines'] {
    return this.data
  }
}
