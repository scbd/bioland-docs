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

Use `#` symbols to create headings. More `#` symbols means a smaller heading.

```markdown
# Page Title (H1) — used only once per page
## Main Section (H2)
## Sub-Section (H3)
### Step Heading (H4)
```

::: warning
Only use one `#` (H1) heading per page. Start your sections with `##` (H2) headings.
:::

## Links

```markdown
<!-- Link to an external website -->
[GitHub](https://github.com)

<!-- Link to another documentation page -->
[Getting Started](/biosafety-land/getting-started)

<!-- Link to a section on the same page -->
[See the next section](#section-heading)
```

## Images

```markdown
![Description of the image](/images/platform/section/filename.png)
```

**Example:**
```markdown
![Admin Toolbar showing the Publishing menu](/images/biosafety-land/content/content-add-contributor-02-admin-menu.png)
```

::: warning
Image paths must start with `/images/`, not `docs/public/images/`. See [Working with Images](./06-images.md) for details.
:::

## Lists

**Unordered list (bullet points):**
```markdown
- First item
- Second item
- Third item
```

**Ordered list (numbered):**
```markdown
1. First step
2. Second step
3. Third step
```

**Nested list:**
```markdown
1. First step
   - Sub-item A
   - Sub-item B
2. Second step
```

## Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

The line with `|----------|` separates the header from the body. It must be included.

## Code Blocks

For multi-line code or file examples, use triple backticks:

````markdown
```
This is a code block.
Multiple lines are preserved.
```
````

You can specify a language for syntax highlighting:

````markdown
```markdown
## This is a markdown heading
```
````

## Blockquotes

```markdown
> This is a blockquote.
> It can span multiple lines.
```

## Horizontal Rule

```markdown
---
```

Creates a horizontal line to separate content sections.

## VitePress-Specific Features

These features are specific to the Bioland documentation site. They will **not** render in GitHub's preview but will display correctly on the live site.

**Tip Box:**
```markdown
::: tip
This is a helpful tip for the reader.
:::
```

**Warning Box:**
```markdown
::: warning
This is a warning about something important.
:::
```

**Info Box:**
```markdown
::: info
This provides additional context or background information.
:::
```

**Danger Box:**
```markdown
::: danger
This warns about something that could cause problems.
:::
```

**Expandable Details:**
```markdown
::: details Click to expand
This content is hidden by default and shown when the reader clicks the heading.
:::
```

**Frontmatter (Page Settings):**

Some pages have a YAML frontmatter block at the very top:
```yaml
---
outline: false
---
```

::: warning
Do not modify frontmatter unless you know what the setting does. If in doubt, leave it unchanged.
:::

::: tip
You can always use the **Preview** tab in the GitHub editor to check how your markdown will look. Remember that VitePress-specific features like tip boxes will not appear in the preview but will work on the live site.
:::

## Further Reading

- [GitHub Markdown Guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) — Official GitHub markdown reference
- [VitePress Markdown Extensions](https://vitepress.dev/guide/markdown) — VitePress-specific markdown features
