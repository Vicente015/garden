import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "vicente015.dev",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    baseUrl: "vicente015.dev",
    ignorePatterns: ["**/private", "**/templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "DM Serif Text",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        /*
        lightMode: {
          light: 'hsl(123, 12%, 95%)',
          lightgray: 'hsl(123, 30%, 90%)',
          gray: 'hsl(123, 30%, 35%)',
          darkgray: 'hsl(123, 20%, 30%)',
          dark: 'hsl(123, 90%, 20%)',
          secondary: 'hsl(123, 40%, 40%)',
          tertiary: 'hsl(123, 40%, 20%)',
          highlight: 'hsl(123, 30%, 90%)',
        },
        darkMode: {
          light: 'hsl(123, 90%, 4%)',
          lightgray: 'hsl(123, 17%, 24%)',
          gray: 'hsl(123, 25%, 70%)',
          darkgray: 'hsl(123, 20%, 85%)',
          dark: 'hsl(123, 90%, 80%)',
          secondary: 'hsl(123, 60%, 85%)',
          tertiary: 'hsl(123, 70%, 70%)',
          highlight: 'hsl(123, 17%, 24%)',
        },
        */
        lightMode: {
          light: 'hsl(123, 12%, 95%)',
          lightgray: 'hsl(123, 30%, 90%)',
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: 'hsl(123, 40%, 40%)',
          tertiary: 'hsl(123, 40%, 20%)',
          highlight: 'hsl(123, 30%, 90%)',
        },
        darkMode: {
          light: "hsl(123, 88%, 3%)",
          lightgray: 'hsl(123, 17%, 24%)',
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: 'hsl(123, 40%, 60%)',
          tertiary: 'hsl(123, 40%, 70%)',
          highlight: 'hsl(123, 17%, 24%)',
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", openLinksInNewTab: false }),
      Plugin.Latex({ renderEngine: "mathjax" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
