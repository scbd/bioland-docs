---
prev:
  text: '3. Understanding Branches'
  link: '/contrib/03-branching'
next:
  text: '5. Previewing Changes'
  link: '/contrib/05-previewing-changes'
---

## Editing Documentation Pages

This section walks you through editing an existing documentation page using the GitHub web editor. No software installation is needed — everything happens in your browser.

## Step 1: Find the Page to Edit

1. Navigate to the file you want to edit (see [Finding and Navigating the Documentation](./02-navigating-repo.md))
2. Confirm you have the correct file by checking the breadcrumb navigation at the top

::: warning
Make sure you are editing the correct file. Use the breadcrumbs at the top of the page to confirm the file path.
:::

## Step 2: Click the Edit Button

1. On the file view page, look for the **pencil icon** (✏️) in the top-right area of the file content
2. Click the pencil icon or the small dropdown arrow next to it

![Pencil Edit Icon](/images/contrib/contrib-edit-01-pencil-icon.png)

3. A dropdown may appear with options:
   - **Edit this file** — opens the web editor (choose this one)
   - **Open with github.dev** — opens a more advanced editor

![Edit Dropdown Menu](/images/contrib/contrib-edit-02-edit-dropdown.png)

4. Click **Edit this file**

::: info
If this is your first time editing this repository, GitHub will create a fork automatically. See [Understanding Branches](./03-branching.md) for details.
:::

## Step 3: Make Your Changes

1. The web editor opens, showing the file contents as plain text (markdown)
2. Click anywhere in the text to position your cursor
3. Type your changes — you can:
   - Fix typos or update text
   - Add new paragraphs or sections
   - Add links, images, or formatting (see [Markdown Quick Reference](./08-markdown-reference.md))

![GitHub Web Editor](/images/contrib/contrib-edit-03-web-editor.png)

![Making Changes in the Editor](/images/contrib/contrib-edit-04-making-changes.png)

::: tip
Use the **Preview** tab to check how your changes will look before saving. See [Previewing Your Changes](./05-previewing-changes.md) for details.
:::

## Step 4: Write a Commit Message

When you're ready to save your changes:

1. Click the green **Commit changes...** button in the top-right corner
2. A dialog will appear asking for a **commit message**

![Commit Changes Dialog](/images/contrib/contrib-edit-05-commit-dialog.png)

3. In the **Commit message** field, write a brief description of what you changed
   - Good examples: "Fix typo in getting started page", "Add screenshot for login step 3", "Update contact information"
   - Keep it short and descriptive

4. Optionally, add more detail in the **Extended description** field

![Commit Form with Message](/images/contrib/contrib-edit-06-commit-form.png)

::: tip
Write clear commit messages that describe what you changed and why. This helps reviewers understand your contribution.
:::

## Step 5: Save Your Changes

1. Make sure **Create a new branch for this commit and start a pull request** is selected
2. You can keep the suggested branch name or change it
3. Click **Propose changes**

## What Happens Next

After saving your changes:
- GitHub will show you a page to create a **pull request**
- This is where you ask for your changes to be reviewed
- See [Creating a Pull Request](./07-pull-requests.md) for the next steps
