---
prev:
  text: '7. Pull Requests'
  link: '/contrib/07-pull-requests'
---

## Markdown Quick Reference

The documentation is written in **Markdown**, a simple formatting language. This reference covers everything you need to write and edit documentation pages.

## Basic Formatting

| What You Want | What You Type | Result |
|---------------|---------------|--------|
| Bold text | `**bold text**` | **bold text** |
| Italic text | `*italic text*` | *italic text* |
| Bold and italic | `***bold and italic***` | ***bold and italic*** |
| Strikethrough | `~~crossed out~~` | ~~crossed out~~ |
| Inline code | `` `code` `` | `code` |

## Headings

Use `#` symbols to create headings. More `#` symbols = smaller heading:

| Syntax | Level |
|--------|-------|
| `# Page Title` | H1 — used only once per page |
| `## Main Section` | H2 — primary sections |
| `### Sub-Section` | H3 — subsections |
| `#### Step Heading` | H4 — step-level detail |

::: warning
Only use one `#` (H1) heading per page. Start your sections with `##` (H2) headings.
:::

## Links

| Type | Syntax |
|------|--------|
| External website | `[GitHub](https://github.com)` |
| Documentation page | `[Getting Started](/biosafety-land/getting-started)` |
| Section on same page | `[See below](#section-heading)` |

## Images

Use `![alt text](/images/platform/section/filename.png)` to add images.

**Example:** `![Admin Toolbar](/images/biosafety-land/content/content-add-contributor-02-admin-menu.png)`

::: warning
Image paths must start with `/images/`, not `docs/public/images/`. See [Working with Images](./06-images.md) for details.
:::

## Lists

**Unordered list** — prefix each line with `-`

- First item
- Second item
- Third item

**Ordered list** — prefix each line with `1.`, `2.`, etc.

1. First step
2. Second step
3. Third step

**Nested list** — indent sub-items with three spaces

1. First step
   - Sub-item A
   - Sub-item B
2. Second step

## Tables

Use pipes `|` and dashes `-` to create tables. The dash row separates the header from the body:

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

## Code Blocks

Wrap multi-line code in triple backticks (` ``` `). You can add a language name after the opening backticks for syntax highlighting (e.g. ` ```markdown `).

## Blockquotes

Prefix lines with `>` to create a blockquote:

> This is a blockquote.
> It can span multiple lines.

## Horizontal Rule

Type `---` on its own line to create a horizontal divider.

---

## Emoji :tada:

You can add emoji using shortcodes surrounded by colons:

| What You Type | Result |
|---------------|--------|
| `:tada:` | :tada: |
| `:100:` | :100: |
| `:white_check_mark:` | :white_check_mark: |
| `:warning:` | :warning: |
| `:x:` | :x: |
| `:bulb:` | :bulb: |
| `:memo:` | :memo: |
| `:rocket:` | :rocket: |

A [list of all emojis](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs) is available.

## Markdown File Inclusion

You can include the contents of one markdown file inside another using the `<!--@include:` syntax. This is useful for reusing shared content across multiple pages.

| What You Type | What It Does |
|---------------|--------------|
| `<!--@include: ./parts/shared.md-->` | Includes the entire file |
| `<!--@include: ./parts/shared.md{3,}-->` | Includes from line 3 onward |
| `<!--@include: ./parts/shared.md{,10}-->` | Includes up to line 10 |
| `<!--@include: ./parts/shared.md{3,10}-->` | Includes lines 3–10 |

::: tip
The `@` prefix can also be used as the source root (the VitePress project root): `<!--@include: @/shared/notice.md-->`
:::

::: warning
No error is thrown if the included file is missing. Always verify that the content renders as expected.
:::

## VitePress-Specific Features

These features are specific to the Bioland documentation site. They will **not** render in GitHub's preview but will display correctly on the live site.

**Tip Box** — type `::: tip` … `:::`
::: tip
This is a helpful tip for the reader.
:::

**Warning Box** — type `::: warning` … `:::`
::: warning
This is a warning about something important.
:::

**Info Box** — type `::: info` … `:::`
::: info
This provides additional context or background information.
:::

**Danger Box** — type `::: danger` … `:::`
::: danger
This warns about something that could cause problems.
:::

**Expandable Details** — type `::: details Click to expand` … `:::`
::: details Click to expand
This content is hidden by default and shown when the reader clicks the heading.
:::

**Frontmatter (Page Settings)** — some pages have a YAML block at the very top between `---` fences (e.g. `outline: false`).

::: warning
Do not modify frontmatter unless you know what the setting does. If in doubt, leave it unchanged.
:::

::: tip
You can always use the **Preview** tab in the GitHub editor to check how your markdown will look. Remember that VitePress-specific features like tip boxes will not appear in the preview but will work on the live site.
:::

## Further Reading

- [GitHub Markdown Guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) — Official GitHub markdown reference
- [VitePress Markdown Extensions](https://vitepress.dev/guide/markdown) — VitePress-specific markdown features
- [Full Emoji List](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs) — All supported emoji shortcodes
