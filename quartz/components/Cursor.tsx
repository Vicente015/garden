// @ts-ignore
import cursorScript from "./scripts/cursor.inline"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function Cursor({}: QuartzComponentProps) {
    return <div className="cursor"></div>
  }
  Cursor.afterDOMLoaded = cursorScript
  return Cursor
}) satisfies QuartzComponentConstructor
