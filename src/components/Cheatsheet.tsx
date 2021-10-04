import { Header } from './Header'
import { ISnippetElements } from '../models/Snippet'

export type CheatsheetProps = {
  title: string
  elements: ISnippetElements[]
}

export function Cheatsheet({ title, elements }: CheatsheetProps) {
  return (
    <>
      <Header title={title} />
      {elements.map(element => (
        <section id={element?.id} key={element?.id}>
          <h2>{element?.title}</h2>
          <ul>
            {element?.lines.map(line => (
              <li key={line?.snippet}>
                <span>{line?.snippet}</span>
                {line?.description}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}
