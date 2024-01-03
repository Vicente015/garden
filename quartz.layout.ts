import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

export const recentNotes = Component.RecentNotes({
  title: 'Notas recientes',
  limit: 4,
  filter: (f) => f.slug!.startsWith('thoughts/') && f.slug! !== "posts/index" && !f.frontmatter?.noindex,
  linkToMore: "tags/seed" as SimpleSlug
})

const tableOfContents = Component.TableOfContents({ layout: 'modern' })

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      Twitter: "https://twitter.com/vicente015_",
      GitHub: "https://github.com/Vicente015",
      Mastodon: 'https://mas.to/@vicente015'
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(tableOfContents),
    Component.DesktopOnly(recentNotes),
  ],
  right: [
    Component.MobileOnly(recentNotes),
    Component.Backlinks(),
    Component.Graph(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
