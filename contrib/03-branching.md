## Understanding Branches

When you edit a file on GitHub, your changes are kept separate from the main documentation until they are reviewed and approved. This is done using **branches** and **forks**.

### What is a Branch?

Think of a branch as making a photocopy of a document. You write your edits on the copy, while the original stays safe and unchanged. Once someone reviews your edits and approves them, the changes are copied back to the original.

In GitHub terms:
- The **main branch** (`master`) is the original document — it powers the live website
- **Your branch** is your personal copy where you make changes

### What is a Fork?

If you don't have direct write access to the repository (which is normal for most contributors), GitHub creates a **fork** — your own complete copy of the entire project. Your edits happen in your fork, on a new branch.

### How GitHub Handles This For You

You don't need to create branches or forks manually. When you click the edit button on a file:

1. GitHub automatically creates a fork of the repository (if you don't already have one)
2. GitHub creates a new branch in your fork for your changes
3. A dialog may appear showing you this process

![Fork and Branch Dialog](/images/contrib/contrib-branch-01-fork-dialog.png)

4. Simply accept the defaults — GitHub chooses a sensible branch name for you

![Branch Name Field](/images/contrib/contrib-branch-02-branch-name.png)

::: info
Your changes are completely safe. They will not affect the live documentation until a reviewer approves and merges them.
:::

### What to Expect

- You can make multiple edits on the same branch
- Each branch represents one set of related changes
- When you're done editing, you'll create a **pull request** to ask for your changes to be reviewed (covered in [Creating a Pull Request](./07-pull-requests.md))
- Nothing you do on your branch can break the live site

::: tip
You don't need to understand Git to contribute. GitHub handles the technical details behind the scenes.
:::
