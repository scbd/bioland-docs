---
outline: [2, 3]
---

# Content

This guide shows you how to manage content in Biosafety Land. It covers all three user roles, organized from lowest to highest permission level.

## Table of Contents

- [Overview](#overview)
- [Your Navigation Options](#your-navigation-options)
- [Contributor Role](#contributor-role)
  - [Add](#add-content-contributor), [Edit](#edit-content-contributor), [Delete](#delete-content-contributor), [Clone](#clone-content-contributor), [Translate](#translate-content-contributor)
- [Content Manager Role](#content-manager-role)
  - [Add](#add-content-content-manager), [Edit](#edit-content-content-manager), [Delete](#delete-content-content-manager), [Clone](#clone-content-content-manager), [Translate](#translate-content-content-manager)
- [Site Manager Role](#site-manager-role)
  - [Add](#add-content-site-manager), [Edit](#edit-content-site-manager), [Delete](#delete-content-site-manager), [Clone](#clone-content-site-manager), [Translate](#translate-content-site-manager)
- [Role Comparison](#role-comparison)
- [Tips and Best Practices](#tips-and-best-practices)

## Overview

All three roles can add content to Biosafety Land. The steps are similar for each role. This guide shows you how to manage content step by step.

### What You Need

- A user account (one of three roles)
- Access to the site at: https://e2e.bsl.staging.cbd.int/en
- Your login email and password

### Three User Roles

1. **Contributor** - Can add basic content
2. **Content Manager** - Can add and manage content
3. **Site Manager** - Can add content and manage the whole site

---

### Your Navigation Options {#your-navigation-options}

There are three ways to reach any publishing page (Content, Media, Files, or Menus). Pick whichever is fastest for you.

#### Option 1: Direct URL

Type the path directly in your browser's address bar. For example, to reach the content list append the path below to your site URL:

```
/admin/content
```

Other common publishing paths:

| Page | Path |
|------|------|
| Content list | `/admin/content` |
| Media list | `/admin/content/media` |
| Files list | `/admin/content/files` |
| Menus | `/admin/structure/menu` |
| Add content | `/node/add` |

#### Option 2: From the Website (Drupal Menu)

When browsing the public website, hover over the **Drupal icon** (the drop-shaped logo at the top-left) to reveal the admin shortcut menu, then click **Publishing**.

::: details Contributor view
![Contributor — Drupal menu on website](/images/biosafety-land/content/content-add-contributor-02-drupal-menu.png)
:::

::: details Content Manager view
![Content Manager — Drupal menu on website](/images/biosafety-land/content/content-add-content-manager-02-drupal-menu.png)
:::

::: details Site Manager view
<!-- TODO: Replace placeholder with actual site-manager screenshot -->
![Site Manager — Drupal menu on website](/images/biosafety-land/content/nav-site-manager-drupal-menu.png)
:::

#### Option 3: From the Admin Area (Toolbar)

When you are already in the admin back-end, click **Publishing** in the black toolbar at the top. A dropdown will appear with links to **Add**, **Content (pages)**, and **Media (attachments)**.

::: details Contributor view
![Contributor — Admin toolbar dropdown](/images/biosafety-land/content/content-add-contributor-01-admin-menu.png)
:::

::: details Content Manager view
<!-- TODO: Replace placeholder with actual content-manager screenshot -->
![Content Manager — Admin toolbar dropdown](/images/biosafety-land/content/nav-content-manager-admin-toolbar.png)
:::

::: details Site Manager view
<!-- TODO: Replace placeholder with actual site-manager screenshot -->
![Site Manager — Admin toolbar dropdown](/images/biosafety-land/content/nav-site-manager-admin-toolbar.png)
:::

::: info Role differences
Each role sees a different set of menu items. Contributors see basic options; Content Managers and Site Managers see progressively more.
:::

---

<!--@include: ./contributor.md-->

<EditIncludedLink path="biosafety-land/publishing/content/contributor.md" />

<!--@include: ./manager.md-->

<EditIncludedLink path="biosafety-land/publishing/content/manager.md" />

<!--@include: ./site-manager.md-->

<EditIncludedLink path="biosafety-land/publishing/content/site-manager.md" />

<!--@include: ./role-comparison.md-->

<EditIncludedLink path="biosafety-land/publishing/content/role-comparison.md" />

<!--@include: ./tips-and-best-practices.md-->

<EditIncludedLink path="biosafety-land/publishing/content/tips-and-best-practices.md" />