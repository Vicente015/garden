import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function ArticleTitle({ fileData }: QuartzComponentProps) {
  const title = fileData.frontmatter?.title
  const icon = fileData.frontmatter?.tags.includes('fruit') ? 'fruit' : fileData.frontmatter?.tags.includes('sapling') ? 'sapling' : 'seed'
  if (title) {
    return <h1 class="article-title">
      <img className={'tag-pixel-icon'} src={`/static/${icon}-icon.png`} alt="Seed icon" />
      {title}
    </h1>
  } else {
    return null
  }
}
ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
