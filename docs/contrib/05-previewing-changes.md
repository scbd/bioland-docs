---
prev:
  text: '4. Editing Pages'
  link: '/contrib/04-editing-pages'
next:
  text: '6. Working with Images'
  link: '/contrib/06-images'
---

## Previewing Your Changes

Before saving your edits, you can preview how the formatted text will look. GitHub's editor has a **Preview** tab that renders your markdown so you can check your work.

### Step 1: Switch to Preview Tab

1. While in the editor, look at the top of the editing area
2. You will see two tabs: **Edit** and **Preview**
3. Click the **Preview** tab

![Edit and Preview Tabs](/images/contrib/contrib-preview-01-tabs.png)

### Step 2: Check Your Formatting

1. The preview will show your markdown rendered as formatted text
2. Verify that:
   - Headings are the correct size
   - Bold and italic text displays properly
   - Links are clickable
   - Images show correctly
   - Lists and tables are formatted properly

![Preview Rendered View](/images/contrib/contrib-preview-02-preview-rendered.png)

3. To continue editing, click the **Edit** tab to switch back

::: tip
Switch back and forth between **Edit** and **Preview** as you work to catch formatting issues early.
:::

### What Renders in Preview

GitHub's preview correctly displays most standard markdown:

| Feature | Syntax | Preview |
|---------|--------|---------|
| **Bold** | `**text**` | ✅ Renders correctly |
| *Italic* | `*text*` | ✅ Renders correctly |
| Headings | `## Heading` | ✅ Renders correctly |
| Links | `[text](url)` | ✅ Renders correctly |
| Images | `![alt](url)` | ✅ Renders correctly |
| Lists | `- item` or `1. item` | ✅ Renders correctly |
| Tables | Pipe syntax | ✅ Renders correctly |
| Code | `` `code` `` | ✅ Renders correctly |

### What Does NOT Render in Preview

Some features specific to our documentation site (VitePress) will not display correctly in GitHub's preview. **This is normal** — they will work properly on the live site after your changes are merged.

| Feature | What You'll See in Preview | What It Looks Like on the Live Site |
|---------|---------------------------|-------------------------------------|
| `::: tip` boxes | Plain text starting with `:::` | A colored tip callout box |
| `::: warning` boxes | Plain text starting with `:::` | A colored warning callout box |
| `::: info` boxes | Plain text starting with `:::` | A colored info callout box |
| `<!--@include: ./file.md-->` | Nothing (hidden HTML comment) | The included file's content |
| YAML frontmatter (`---`) | Rendered as a table | Not visible (used for page settings) |

::: info
Don't worry if tip boxes and warning boxes appear as plain text in the preview. They will display correctly as colored callout boxes on the actual documentation site.
:::

### Viewing a Visual Diff

If you want to see exactly what changed compared to the original file:

1. After committing changes to a branch, navigate to your pull request
2. Click the **Files changed** tab
3. Lines you added appear highlighted in **green**
4. Lines you removed appear highlighted in **red**

![Diff View](/images/contrib/contrib-preview-03-diff-view.png)

### Tips for Verifying Changes

- Check that all headings use the correct level (`##`, `###`, `####`)
- Verify that image paths start with `/images/` (not `docs/public/images/`)
- Make sure links point to the correct pages
- Confirm that numbered lists are in the right order

### Next Steps

Once you've previewed and verified your changes, learn about [Working with Images](./06-images.md) if your edits include screenshots or diagrams.
