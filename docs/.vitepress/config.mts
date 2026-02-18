import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bioland Tool",
  description:
    "Documentation for Bioland and Biosafety Land National Clearing-Houses Tools",

  // Clean URLs (no .html suffix)
  cleanUrls: true,

  // No appearance toggle — dark mode forced via theme
  appearance: false,

  // Language
  lang: 'en',

  // Last updated timestamp
  lastUpdated: true,

  // Ignore localhost links in dev documentation (they are valid examples)
  ignoreDeadLinks: [
    /^http:\/\/localhost/,
  ],

  // Sitemap generation
  sitemap: {
    hostname: "https://docs.bioland.org",
  },

  // Head tags for favicon
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/chm-logo.svg",

    nav: [
      { text: "Home", link: "/" },
      { text: "Bioland", link: "/bioland/" },
      { text: "Biosafety-Land", link: "/biosafety-land/" },
    ],

    sidebar: {
      "/bioland/": [
        {
          text: "Bioland User Guide",
          items: [
            { text: "Home", link: "/bioland/" },
            { text: "Getting Started", link: "/bioland/getting-started" },
            { text: "Features", link: "/bioland/features" },
            { text: "User Guide", link: "/bioland/user-guide" },
          ],
        },
      ],
      "/biosafety-land/": [
        {
          text: "Getting Started",
          items: [
            { text: "Home", link: "/biosafety-land/" },
            {
              text: "Getting Started",
              link: "/biosafety-land/getting-started",
            },
            { text: "Features", link: "/biosafety-land/features" },
            { text: "User Guide", link: "/biosafety-land/user-guide" },
          ],
        },
        {
          text: "Authentication & Access",
          collapsed: true,
          items: [
            { text: "Login", link: "/biosafety-land/authentication/login" },
            { text: "Logout", link: "/biosafety-land/authentication/logout" },
            {
              text: "Password Reset",
              link: "/biosafety-land/authentication/password-reset",
            },
            {
              text: "Account Activation",
              link: "/biosafety-land/authentication/account-activation",
            },
            {
              text: "Access Levels",
              link: "/biosafety-land/authentication/access-levels",
            },
          ],
        },
        {
          text: "Publishing",
          collapsed: true,
          items: [
            {
              text: "Content",
              link: "/biosafety-land/publishing/content/",
              collapsed: true,
              items: [
                {
                  text: "Contributor",
                  link: "/biosafety-land/publishing/content/contributor",
                },
                {
                  text: "Content Manager",
                  link: "/biosafety-land/publishing/content/manager",
                },
                {
                  text: "Site Manager",
                  link: "/biosafety-land/publishing/content/site-manager",
                },
                {
                  text: "Role Comparison",
                  link: "/biosafety-land/publishing/content/role-comparison",
                },
                {
                  text: "Tips & Best Practices",
                  link: "/biosafety-land/publishing/content/tipes-and-best-practices",
                },
              ],
            },
            {
              text: "Media",
              link: "/biosafety-land/publishing/media/",
              collapsed: true,
              items: [
                {
                  text: "Contributor",
                  link: "/biosafety-land/publishing/media/contributor",
                },
                {
                  text: "Content Manager",
                  link: "/biosafety-land/publishing/media/content-manager",
                },
                {
                  text: "Site Manager",
                  link: "/biosafety-land/publishing/media/site-manager",
                },
                {
                  text: "Role Comparison",
                  link: "/biosafety-land/publishing/media/role-comparison",
                },
                {
                  text: "Tips & Best Practices",
                  link: "/biosafety-land/publishing/media/tips-and-best-practices",
                },
              ],
            },
            {
              text: "Files",
              link: "/biosafety-land/publishing/files/",
              collapsed: true,
              items: [
                {
                  text: "Content Manager",
                  link: "/biosafety-land/publishing/files/content-manager",
                },
                {
                  text: "Site Manager",
                  link: "/biosafety-land/publishing/files/site-manager",
                },
                {
                  text: "Role Comparison",
                  link: "/biosafety-land/publishing/files/role-comparison",
                },
                {
                  text: "Tips & Best Practices",
                  link: "/biosafety-land/publishing/files/tips-and-best-practices",
                },
              ],
            },
            {
              text: "Menus",
              link: "/biosafety-land/publishing/menus/",
              collapsed: true,
              items: [
                {
                  text: "Content Manager",
                  link: "/biosafety-land/publishing/menus/content-manager",
                },
                {
                  text: "Site Manager",
                  link: "/biosafety-land/publishing/menus/site-manager",
                },
                {
                  text: "Role Comparison",
                  link: "/biosafety-land/publishing/menus/role-comparison",
                },
                {
                  text: "Tips & Best Practices",
                  link: "/biosafety-land/publishing/menus/tips-and-best-practices",
                },
              ],
            },
          ],
        },
        {
          text: "Administration",
          collapsed: true,
          items: [
            { text: "People", link: "/biosafety-land/administration/people" },
            {
              text: "Role Permissions",
              link: "/biosafety-land/administration/role-permissions",
            },
            {
              text: "Configuration",
              link: "/biosafety-land/administration/configuration",
            },
            { text: "Reports", link: "/biosafety-land/administration/reports" },
          ],
        },
        {
          text: "Context",
          collapsed: true,
          items: [
            {
              text: "Content Types",
              link: "/biosafety-land/context/content-types",
            },
          ],
        },
      ],
      "/dev/": [
        {
          text: "Developer Documentation",
          items: [
            { text: "Home", link: "/dev/" },
            { text: "Overview", link: "/dev/overview" },
            { text: "Getting Started", link: "/dev/getting-started" },
          ],
        },
        {
          text: "Installation",
          items: [
            { text: "Bioland Installation", link: "/dev/installation-bioland" },
            {
              text: "Biosafety-Land Installation",
              link: "/dev/installation-biosafety",
            },
            { text: "Configuration", link: "/dev/configuration" },
          ],
        },
        {
          text: "Backend",
          items: [
            { text: "Backend Overview", link: "/dev/backend-overview" },
            { text: "Docker Setup", link: "/dev/docker-setup" },
            {
              text: "Backend Configuration",
              link: "/dev/backend-configuration",
            },
            { text: "Customization", link: "/dev/customization" },
            { text: "API Reference", link: "/dev/api" },
          ],
        },
        {
          text: "Deployment",
          items: [
            { text: "Bioland Deployment", link: "/dev/deployment-bioland" },
            {
              text: "Biosafety-Land Deployment",
              link: "/dev/deployment-biosafety",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/scbd/bioland-docs" },
    ],

    editLink: {
      pattern: 'https://github.com/scbd/bioland-docs/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },

    search: {
      provider: "local",
    },

    footer: {
      message: "Bioland Tool Documentation",
      copyright: "© 2025 Convention on Biological Diversity",
    },
  },
});
