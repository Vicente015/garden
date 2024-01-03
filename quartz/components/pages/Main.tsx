import { htmlToJsx } from "../../util/jsx"
import { QuartzComponentConstructor, QuartzComponentProps } from "../types"
import darkmodeScript from "../scripts/darkmode.inline"

function Main({ fileData, tree }: QuartzComponentProps) {
  const content = htmlToJsx(fileData.filePath!, tree)
  return (
    <article class="popover-hint">
      <section className='main-intro'>
        <div className='main-img'>
          <img src="https://github.com/vicente015.png" alt="avatar" />
        </div>
        <div className='main-text'>
          <p>Hola, soy</p>
          <h1>Vicente</h1>
        </div>
      </section>
      <section>
        {content}
      </section>
    </article>
  )
}

Main.beforeDOMLoaded = darkmodeScript

export default (() => Main) satisfies QuartzComponentConstructor
