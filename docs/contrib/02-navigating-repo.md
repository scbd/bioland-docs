---
prev:
  text: '1. GitHub Account'
  link: '/contrib/01-github-account'
next:
  text: '3. Understanding Branches'
  link: '/contrib/03-branching'
---

## The Easy Way: Edit Links on the Documentation Site

Every page on the documentation site includes built-in links that take you directly to the correct file on GitHub for editing. This is the fastest way to start editing — no need to navigate the repository manually.

### "Edit this page on GitHub"

At the **bottom of every page** on the documentation site, you will find an **Edit this page on GitHub** link. Clicking it opens the exact file in the GitHub editor, ready for you to make changes.

![Edit this page on GitHub link at the bottom of a page](/images/contrib/contrib-nav-00-edit-page-link.png)

### "Edit this included page on GitHub"

Some pages — such as the Publishing guides — combine content from multiple files into a single long page. On these pages you will see **Edit this included page on GitHub** links between each section. These link to the specific sub-file that contains that section, so your edits target the right place.

![Edit this included page on GitHub link between sections](/images/contrib/contrib-nav-00-edit-included-link.png)

### What Happens When You Click

Both links open the **GitHub web editor** for the corresponding file. You will see the Markdown source code and can make your changes directly in the browser:

![GitHub web editor opened from an edit link](/images/contrib/contrib-nav-00-github-editor.png)

From here you can edit the file and then follow the steps in [Creating a Pull Request](./07-pull-requests.md) to submit your changes.

::: tip
If you already see the page you want to edit on the live documentation site, use the edit link at the bottom — it's the quickest path to editing.
:::

---

::: info Ready to start editing?
You now know the fastest way to find and edit any page. You can **proceed to the next step** to learn how branches work, or continue reading below for an in-depth look at the repository's file structure.

<a href="./03-branching" class="vp-link" style="display:inline-flex;align-items:center;gap:6px;margin-top:8px;font-weight:600;color:var(--vp-c-brand-1);">Next: Understanding Branches →</a>
:::

## The Manual Way: Finding and Navigating the Repository

If you need to browse the repository directly — for example, to find a file you haven't visited on the site, or to work with images — you can navigate the GitHub repository manually.

### Step 1: Open the Repository

1. Go to [https://github.com/scbd/bioland-docs](https://github.com/scbd/bioland-docs)
2. You will see the repository home page with a list of files and folders

![Repository Home Page](/images/contrib/contrib-nav-01-repo-home.png)

::: tip
Bookmark this page for quick access: [https://github.com/scbd/bioland-docs](https://github.com/scbd/bioland-docs)
:::

### Step 2: Understand the Folder Structure

The repository is organized into folders. Here are the most important ones:

| Folder | Contains |
|--------|----------|
| `docs/bioland/` | Bioland platform documentation pages |
| `docs/biosafety-land/` | Biosafety-Land platform documentation pages |
| `docs/public/images/` | All images used in the documentation |
| `contrib/` | This contributing guide |

1. Click the **docs** folder to open it
2. You will see the subfolders for each platform

![Docs Folder Contents](/images/contrib/contrib-nav-02-docs-folder.png)

### Step 3: Navigate to a Page

1. Click through the folders to find the page you want to edit
2. For example, to find the Biosafety-Land getting started page:
   - Click **docs**
   - Click **biosafety-land**
   - Click **getting-started.md**
3. GitHub will display the file contents

![File View on GitHub](/images/contrib/contrib-nav-03-file-view.png)

The **breadcrumb navigation** at the top of the page shows your current location in the folder hierarchy. You can click any part of the breadcrumb to go back to a parent folder.

![Breadcrumb Navigation](/images/contrib/contrib-nav-04-breadcrumbs.png)

### Step 4: Find a Specific File

If you know the name of the file you want to edit, you can search for it:

1. From the repository home page, click the **Go to file** button (or press **T** on your keyboard)
2. Start typing the file name
3. GitHub will filter the list of files as you type
4. Click the file you want to open

![Go to File Search](/images/contrib/contrib-nav-05-go-to-file.png)

::: tip
Press the **T** key on your keyboard from any page in the repository to quickly open the file search.
:::

### Understanding File Paths and URLs

Each documentation file maps to a page on the live website. The pattern is:

| File Path in GitHub | URL on Live Site |
|---------------------|------------------|
| `docs/biosafety-land/getting-started.md` | `/biosafety-land/getting-started` |
| `docs/bioland/features.md` | `/bioland/features` |
| `docs/biosafety-land/authentication/login.md` | `/biosafety-land/authentication/login` |

The rules are:
- Remove `docs/` from the beginning of the path
- Remove `.md` from the end of the filename
- The rest of the path becomes the URL

### Next Steps

Now that you know how to navigate the repository, proceed to [Understanding Branches](./03-branching.md) to learn how changes are organized before editing.
