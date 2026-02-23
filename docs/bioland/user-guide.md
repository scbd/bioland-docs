# Bioland 2 User Guide

Welcome to the Bioland 2 User Guide! This comprehensive guide will help you navigate and use your Bioland 2 platform effectively.

## Overview

Bioland 2 is an updated version of Bioland — a Drupal-based turnkey platform for a national Clearing-House Mechanism (CHM) website. It continues to be offered to the CBD Parties for free, backed by the SCBD IT team and by the CHM Helpdesk.

Apart from the technical update of the platform, the focus of Bioland 2 is on better visual experience, much stronger integration with central CHM and external Biodiversity partners.

::: tip For Bioland 1 Upgraders
For those Parties upgrading from Bioland 1, the new interface will be a mix of familiar and new features. Content from Bioland 1 will be automatically migrated.
:::

### Key Features

- **Global Interoperability**: Connect with partner content from GBIF, Panorama, and the Secretariat of the CBD
- **Local Content Management**: Create and manage your own news, events, learning resources, protected areas, and more
- **Forum Integration**: Engage your community through topics and comments
- **Multi-language Support**: Translate your content into multiple languages
- **Advanced Search**: Find information quickly across local and global sources

## Understanding the Home Page

The home page is your central hub for navigating the Bioland 2 platform. It provides quick access to all major features and displays important information at a glance.

![Bioland 2 Home Page Overview](/images/bioland/bl2-01-image-1.png)

### Mega-menu Navigation

One of the major new features of Bioland 2.0 is an upgrade from basic static menus to dynamic mega-menus. There are **6 mega menu drop-downs** as well as "Home" and "Login" links.

![Main Navigation Menu](/images/bioland/bl2-01-image-2.png)

#### Convention & Protocols Submenu

This submenu collects the most essential information about the Country's relationship to the Convention on Biological Diversity. It has links to:

- **The Convention itself** — About CBD and its protocols
- **National Contact Points** — The Country's various National Contact Points
- **Government Ministries and Institutes** — Populated from content within this National CHM Website
- **Country Profiles** — On CBD and Partner websites
- **CBD Bodies** — Links to the key entities that produce key decisions and guidance
- **Guidance & Decisions** — Allows navigation into decisions and guidance produced by the bodies
- **CBD Protocols** — Links to the protocols and their respective clearing-house sites

Some of these links were previously only in the footer; they are now also promoted prominently in the mega-menu to ensure discovery.

The content of the "Government Ministries and Institutes" section comes from the content populated within this National CHM Website (Bioland 2 instance). For those upgrading from Bioland 1, the content will be automatically migrated. Only several entries are displayed; the full list can be accessed by clicking **"View more"**.

#### Biodiversity Facts Submenu

The "Biodiversity Facts" submenu focuses on baseline facts about the country, including ecosystems, protected areas, and biodiversity data available on the partners' sites. The entries in the Ecosystems and Protected Areas sections come from the entered or migrated content on the site, and **"View more"** links can be followed for the full lists. Other content can be edited via the menu administration interface.

#### Implementation Submenu

The "Implementation" submenu is all about the current progress. There is information from the National Report 6, imported via the new interoperability mechanisms. The central part is a couple of projects and a link to the full list. Finally, there are links to the Country's various types of information on the Biosafety Clearing-House Mechanism portal.

#### Cooperation Submenu

The "Cooperation" submenu contains the latest updates on the discussion forums for this site, as well as links to the Technical & Scientific Cooperation portal, with links directly to the Opportunities, Assistance, and the full providers list.

#### News & Updates Submenu

The "News & Updates" submenu shows the latest News, Events (including Meetings), and Media (Photos, Videos). While News and Events are already very prominent on the home page, this menu is available across the whole website, serving as a useful quick-access view of the latest information. Additionally, the menu provides direct links to dedicated pages of the content.

#### Resources Submenu

The final submenu "Resources" pulls the latest entered or migrated reports, provides links to Capacity-Building information and framework, various available E-Learning material on the site, and a small section of internal and external links.

### Header Elements

Above the mega-menu, there is a header. Apart from the static elements of Country name, logo, and CHM Network link, it contains the Language Switch bar and the custom site search.

![Header Elements](/images/bioland/bl2-01-image-3.png)

- **Country Name & Site Logo**: Your country name and organization's branding
- **CHM Network Link**: Direct link to the CHM Network
- **Main Menu**: Primary navigation with mega-menu dropdowns
- **Custom Site Search**: Allows searching both the content created locally and that imported from the Secretariat via the interoperability protocols. It also allows selecting a specific content type once on the search results page. A number of links from the menu and page modules use the search functionality under the covers to list the items.
- **Language Switch Bar**: Switch between available languages. The website supports interface and content creation in all 6 Official UN languages. A content item preserves the equivalence between translations and will show the content in the chosen language, with a fallback to English when the translation is missing. An individual National CHM Portal can choose which languages to show content in, from the official 6.
- **User Menu**: Login/logout and user account options

### Latest News and Updates Section

The first major content section on the home page is "Latest News and Updates". It combines News and Events, both those entered on the website itself and those it receives via the new interoperability with the central CBD website.

![Featured Content Sections](/images/bioland/bl2-01-image-4.png)

**Ten entries** are displayed, though only a couple can fit on the screen. The rest can be seen by:
- Using a dot pager at the bottom of the section
- Using visible navigation arrows on the right and — once used — on the left
- Dragging on the entries in the carousel

#### Entry Information Display

For each entry, several pieces of information are shown to allow quick review:

| Element | Description |
|---------|-------------|
| **Cover image** | If not provided by the entry, it is picked automatically |
| **Source and type** | Whether it's from the secretariat or the website, and whether it's News or Event/Meeting |
| **Title** | The entry's headline |
| **Description** | Where available |
| **Date** | For news items: creation date; For events: event date (possibly in the future) |
| **Tags** | Associated with the entry, when available |

Clicking on the image or the title will go to the original entry's page for full details. It may be on the CBD website or on the National (this) site.

To see more than 10 entries, the link **"View more news and Updates"** goes to a dedicated web page showing local and Secretariat content separately.

---

## Knowledge Modules

Below the news section, there is a series of modules organized in 3 columns. They provide information relevant to the country and useful links to partners or deeper within the site.

![Knowledge Modules - Partner Modules](/images/bioland/bl2-01-image-6.png)

### Partner Modules

These modules extract information from partners via interoperability APIs and present it in one place for discoverability purposes.

#### Panorama Solutions

The Panorama Solutions module showcases items from [panorama.solutions](https://panorama.solutions/en) with links back to the showcase as well as to the general browse interface.

**Example Solution:**
- **Title:** Conserving marine life at the Bar Reef Marine Sanctuary
- **Description:** Bar Reef Marine Sanctuary (BRMS) is an offshore continental shelf-patch reef that has been bleached. The area flourished with tourism-related businesses and the dependency of local liveli...
- **Link:** Browse Solutions

#### GBIF (Global Biodiversity Information Facility)

GBIF maintains species occurrence records, aggregated from multiple sources. Bioland 2 includes a zoomed-in map and information on records, datasets, and publishers for the current country.

**Example Statistics Displayed:**

| Metric | Example Value |
|--------|---------------|
| Species records | 2,371,620 |
| Datasets | 1 |
| Data publishers | 369 |

Clicking individual links goes to the corresponding filtered search. Clicking **"View all"** goes to GBIF's country page with complete information.

#### GEO BON

The Group on Earth Observations Biodiversity Observation Network (GEO BON) provides Essential Biodiversity Variables. The module showcases a sample dataset and allows linking back to the dataset itself and to the general navigation portal.

**Example Dataset:**
- **Provided by:** German Centre for Integrative Biodiversity Research (iDiv)
- **Title:** Local bird diversity (cSAR/BES-SIM)
- **Description:** Changes in bird diversity at 1-degree resolution caused by land use, estimated by the cSAR model for 1900-2015...
- **Tags:** BioGEO-SIM 2.0 projections, PREDICTS, land-use
- **Link:** EBV Data Portal

---

### CBD Modules

![CBD Modules and Site Modules](/images/bioland/bl2-01-image-7.png)

#### Technical & Scientific Cooperation (TSC)

The Technical & Scientific Cooperation programme operates a BioBridge Initiative (BBI) platform that facilitates technical and scientific cooperation. The platform is an integral part of the clearing-house mechanism.

This module showcases one of the BBI Requests, links back to the record, and provides several other links into different workflows of BBI.

**Example BBI Request:**
- **Title:** Formalisation législative des ressources génétiques et des connaissances traditionnelles à l'importation et à l'exportation au Bénin
- **Description:** Le protocole de Nagoya sur les ressources génétiques et le Partage Juste et Equitable des Avantages découlant de leur utilisation a été ratifié par le Bénin, le 23 janvier 2014. La stratégie nationale...
- **Tags:** Guidance, Bénin
- **Date:** 03 Oct 2017

**Quick Links:**
- Browse TSC Opportunities
- Browse TSC Assistance and Providers
- Request TSC Assistance
- Provide TSC Assistance
- Provide TSC Opportunity

---

### Site Modules

#### Implementation Module

Similar to the Implementation menu, this module showcases projects and provides links to project details as well as other Implementation-related document collections.

**Example Project:**
- **Title:** Managing together: Integrating community-centered, ecosystem-based approaches into forestry, agriculture and tourism sectors
- **Description:** Project Background Sri Lanka's biodiversity is globally significant both for its irreplaceability and its vulnerability. About 30% of the country's land area has been designated as protected, in a ra...
- **Date:** 31 Jan 2021

**Quick Links:**
- View National Reports
- View Laws & Regulations
- View NBSAP(s)
- View Projects
- View Documents

#### E-Learning Module

This module showcases E-learning course items entered on the site and links to their details as well as to the full list of courses.

**Example Learning Resource:**
- **Title:** Biodiversity Learning Platform
- **Description:** The Convention on Biological Diversity (CBD) was signed at the Earth Summit in Rio de Janeiro, Brazil, in 1992, and entered into force on 29 December 1993...
- **Tags:** Clearing-House Mechanism
- **Link:** Browse Courses

#### Forums Module

Forums is one of the new features of Bioland 2, allowing interactive discussion between site visitors. This module lists the latest discussions and provides links directly to them as well as to the general forum page.

**Latest Discussions Display:**
Each discussion shows:
- Discussion title
- Associated tag/category
- Time since posted
- Number of comments

**Link:** Browse Discussions

---

### Footer Section

At the bottom of each page of the website, there is a footer with links that go within the website, to important pages on CBD and its protocol sites, to partner pages for the Country, and to the Social Media accounts for the country.

![Footer Section](/images/bioland/bl2-01-image-5.png)

All footer links can be controlled by the site's Content Managers. If a footer section is completely irrelevant (such as "Social Media"), it can be hidden altogether.

#### Footer Sections

| Section | Contents |
|---------|----------|
| **Quick Links** | Home, Network, Guidance, Bioland Introduction |
| **CBD Links** | CBD, Global Biodiversity Framework, CHM Network, CHM Information services, BCH, ABSCH |
| **Bioland** | CBD Country Profile, Biodiversity Indicators Summary, GEF Projects, InfoMEA country profile, Protected Areas, Red List of Threatened Species, United Nations country profile |
| **Social Media** | X, Facebook, Instagram, LinkedIn, YouTube |

## Using Search

Bioland 2 features an updated search functionality. It is accessible directly as an advanced search and – behind the scenes – powers many of the lists of entries that make Bioland search-engine friendly.

### Accessing Advanced Search Directly

![Search Bar Location](/images/bioland/bl2-02-000.png)

Search is available throughout the site from its global position in the top-right of the page.

The search can be started directly from the input box by entering a term followed by enter key.

To access the advanced search without a specific term, just hitting enter will work. Or the Loup symbol can be clicked on with the mouse.

### Choosing the Content to Search

![Search Tabs - Site Content vs Secretariat](/images/bioland/bl2-02-001.png)

The search interface differentiates between searching the local site content and searching information from the global CHM via interoperability with the secretariat. Local content search supports additional filtering by content type that is not available with the Secretariat search. Switching between tabs (search types) reset the search terms.

The search itself is responsive. If you pause typing the query or select a content type, the search results are updated immediately.

For the keywords search, all entered keywords must be present in the found documents, but in any order or location. If a phrase search is required instead, the phrase can be entered in the double-quotes. For example: "subregional dialogue".

### Searching Local Site

The local site search supports both a **Free Text** field and **Type** filtering.

![Local Site Type Filtering](/images/bioland/bl2-02-002.png)

For Type filtering, as it is a standard list box, multiple Types can be selected individually or as a range; they can also be deselected.

Free Text search and Type filtering can be both applied at the same time. The result count in the top-right corner will show the final count of matches.

![Combined Free Text and Type Search Results](/images/bioland/bl2-02-003.png)

::: tip Result Counts
Note that the counts next to types do not represent the final number when Free Text search is also used. Those are the original numbers of local content items for the respective categories.
:::

### Searching Secretariat Content

![Secretariat Search](/images/bioland/bl2-02-004.png)

For the secretariat, only a simpler Full Text search is available. Make sure to use the pager at the bottom, as the number of matching records is often quite large.

![Secretariat Search - No Results](/images/bioland/bl2-02-005.png)

If the search matches no records, the listing will be empty with no pager or matching counts.

### Category Search

Note that because the listings of entries is powered by the search behind the scenes, the page may look very similar but not show the Type filter. That's because the records all come from a single type.

![Category Listing Powered by Search](/images/bioland/bl2-02-006.png)

If you need to view several types of content, just go to the advanced search. It will have the matching content type in the list, as well as all the other ones.

## Managing Content

Bioland 2 content comes from five main sources:

1. **Partner Content**: Data from GBIF, Panorama, and other partners via global interoperability
2. **Secretariat Content**: News, events, and national targets from SCBD via CHM interoperability  
3. **Local Content**: Your site's own news, events, learning resources, protected areas, etc.
4. **Forum Content**: Topics and comments from community discussions
5. **Structural Elements**: Menus and navigation components

### Adding Local Content

Local content is what you create and manage directly on your site. This guide covers adding local (site) content - the third source of content listed above.

#### Accessing the Content Management Screen

There are several ways to access the Content Management screen, depending on your current location and permissions.

**From the public site:**

If you are logged in with appropriate permissions, you can access the Publishing menu directly from the public site:

1. Look for the **Publishing** menu in the admin bar at the top of the page
2. Click on **Content** to access the Content Management screen

![Publishing Menu - Public View](/images/bioland/bl2-03-000.png)

**From the Admin interface:**

1. Navigate to **Publishing** > **Content** in the admin menu
2. You'll see a list of all your content items

![Publishing Menu - Admin View](/images/bioland/bl2-03-001.png)

The Content Management screen displays all published content. Initially it shows content in the site's default language (usually English) and hides translated entries. This can be changed in the filter settings above the content listing.

![Content Management Screen](/images/bioland/bl2-03-007.png)

Please note that this screen shows only content that has already been published and is seen by the general public on the website. Content that is currently unpublished is on a different **Unpublished** tab.

#### Using the Language Filter

The Content Management interface includes a Language filter that allows you to:

- View content in a specific language
- See all content items regardless of language
- Identify which items need translation

![Language Filter](/images/bioland/bl2-03-002.png)

#### Managing Unpublished Content

The **Unpublished** tab shows content items that are still in draft mode:

![Unpublished Content Tab](/images/bioland/bl2-03-003.png)

This view helps you:
- Review content waiting for publication
- Identify translations that are still unpublished
- Quickly access items needing review

#### Content Types You Can Create

Bioland supports structured content. This means that instead of a single blob of text, different types allow entering information in specialized formats and displaying them appropriately. The easiest example is the **Events** content type that allows entering dates for the start and end of the event.

Most of the fields are shared between content types, so the interface will be very familiar for any content type once one or two entries are created.

| Content Type | Explanation |
|-------------|-------------|
| **Basic Page** | Simple pages that can be linked from the menu for general information about any topic |
| **National Target** | Not in current use; instead use Central CHM to register the targets |
| **Biodiversity Data** | Descriptions of sources of Biodiversity Data. Entries are automatically linked from the Biodiversity Facts submenu of the main menu |
| **Document** | Good for including complex documents produced somewhere else (PDFs, etc.). Document listing is linked from the main home page, under the Implementation module |
| **Ecosystem** | One of the common Biodiversity Facts worth presenting on a national CHM website. Entries are automatically linked from the Biodiversity Facts submenu |
| **Event** | One of the most common types. Events show up on the home page, in menus, on their own summary page, and in search |
| **Image or Video** | While images and remote videos can be attached to other types, this type presents them in full focus. Entries are automatically linked from the News & Updates submenu |
| **Government Ministry or Institute** | A unified list of organizations working on biodiversity in a country. Entries show up under the Convention & Protocols submenu |
| **Learning Resource** | Tracks learning resources. One is shown on the home page in a dedicated section. Use **Promotion options** > **Promoted to front page** to control which one. All entries are available on the search page |
| **News** | Like Events, very common and shows up in multiple locations |
| **Project** | Projects benefit from being collected in one place for a quick review of biodiversity-related work. Creating English-language summaries for projects in other languages significantly increases discoverability in search engines |
| **Protected Area** | Just like Ecosystems, useful to have listed on the site. Entries are automatically linked from the Biodiversity Facts submenu |
| **Related Website** | A more general content type for linking to other biodiversity-related sites that don't fall into a specific category above |
| **Other** | A very general content type, mostly for legacy reasons. Avoid using it unless none of the other types are appropriate |

#### Creating New Content

1. Navigate to the Content Management screen
2. Click the **Add content** button

![Add Content Button](/images/bioland/bl2-03-004.png)

3. Select the content type you want to create from the available options:

![Site Content Selection](/images/bioland/bl2-03-005.png)

::: tip Direct URL Bookmark
For those who enter content frequently, bookmarking a direct URL may be useful. As it represents the form entry point, it does not change. Normally, it would be `https://sitename/en/node/add/content` (with the address of your own site).
:::

4. Fill in the common fields:

**Common Fields (present for all content types):**

| Field | Required | Explanation |
|-------|----------|-------------|
| **Content Type** | Yes | Chooses what content type is being entered. Depending on the value, additional fields may appear on the screen |
| **Title** | Yes | Shows up everywhere the item is mentioned. Should give a very concise summary. Plain text only, cannot be formatted |
| **Body** | No | Comprehensive description of the item, supports complex formatting. May not show up completely in some displays, but always shown in full on the content item's own page |
| **Attachments** | No | Allows adding images, remote videos, and linked documents to the content item |
| **Tags: GBF Targets** | No | Select one or more Global Biodiversity Framework targets. Mini search included. Full target list at: [cbd.int/gbf/targets](https://www.cbd.int/gbf/targets) |
| **Tags: Thematic Areas** | No | Select a set of relevant thematic areas |
| **Tags: Countries and Regions** | No | Select relevant countries — especially useful for transboundary and regional news and events |
| **Tags: SDG** | No | Select relevant Sustainable Development Goals. Full list at: [sdgs.un.org/goals](https://sdgs.un.org/goals) |

**Specialized Fields (available for specific content types):**

| Field | Content Types | Explanation |
|-------|--------------|-------------|
| **URL and Link text** | Biodiversity Data, Document, Event, Government Ministry or Institute, Learning Resource, Project, Related Website | For material on external sites, provides a summary and link. Multiple links can be provided |
| **Published Date** | Document, News | A single date indicating when the document was originally created (not when published on the website) |
| **Start and End Dates** | Event | A date range including time, allowing display of content with a specified duration. The time component is required (can be 0:00 AM if time is not important) |

5. Set the publication status using the **Published** checkbox:

![Published Checkbox](/images/bioland/bl2-03-006.png)

::: tip Publishing Workflow
The **Published** checkbox is part of the publishing workflow. If a content item is not published, it will not show up on the public website view. This allows content to be reviewed or created as a draft and updated several times before publishing. A published item can also be unpublished and returned to the internal state. This checkbox is not available to the **Contributor** role, ensuring their content will be reviewed by a higher role before publication.
:::

6. Save your content

#### Managing Content Items

Once an item has been created, it appears in the listing on the Content Management screen. From there, the item can be edited, translated, deleted, or even cloned. If the item has not been published, it will be available from the **Unpublished** tab instead.

Similar options are available for logged-in users with appropriate permissions when viewing the item's page itself. For logged-in users, an unpublished content item will also have its page available to review the current draft's presentation. That page remains unavailable to public users — they will receive an error if they try to visit the page's URL.

#### Content Item Tabs

When editing a content item, you'll see several tabs at the top that provide access to different features:

![Content Item Tabs](/images/bioland/bl2-03-008.png)

These tabs may include:
- **View**: Preview the content as it will appear
- **Edit**: Modify the content
- **Translate**: Add or edit translations
- **Delete**: Remove the content item (use with caution)

::: warning
Remember to review your content before publishing. Once published, it will be visible to all site visitors.
:::

## Adding Users

User management allows you to control who can access and edit your Bioland 2 site.

### Availability of Functionality

Managing users is a functionality only available to users with the role of **Site Manager**. While there is a self-registration option for new users, they still need to be confirmed and have the roles assigned by the existing user with the Site Manager permissions.

### User Roles

Bioland 2 supports several user roles. While the interface presents roles as a multi-choice selection, the higher-level role includes functionalities of all lower-level roles:

| Role | Permissions |
|------|-------------|
| **Site Manager** | Highest-level role — can manage users, advanced site functions, and all features below |
| **Content Manager** | Can create content for the site, manage menus, edit and publish content |
| **Contributor** | Can create content for review but cannot publish it directly or manage menus |
| **Authenticated User** | Compulsory for all users — basic site access |

::: tip Role Permissions
Menu editing is available to users with **Content Manager** role and above. It is not available to the Contributor role. The Contributor role ensures content will be reviewed by a higher role before publication.
:::

### Accessing User Management Interface

The user management screen is part of the administration interface. There are three ways to access it, once logged-in with the Site Manager permissions:

1. **Direct access:**
   Navigate directly to the People administration page:
   ```
   https://sitename/en/admin/people
   ```
   For example: `https://training.bl2.chm-cbd.net/en/admin/people`

2. **From public interface via Quick Admin menu's People menu entry:**
   
   When logged in with Site Manager permissions, look for the Quick Admin menu at the top of the page and select **People**.

   ![Quick Admin Menu - People Entry](/images/bioland/bl2-04-000.png)

3. **Via the Administration menu:**
   
   From the full Administration interface, navigate to the People section.

   ![Administration Menu - People Entry](/images/bioland/bl2-04-001.png)

If these options do not appear, the logged-in account does not have the appropriate permissions.

::: info Admin Menu Toggle
Sometimes the Admin Interface menu does not show up at all. This may happen if it was collapsed with the **Manage** toggle. Pressing on the toggle again will show the menu.

![Admin Menu Manage Toggle](/images/bioland/bl2-04-002.png)
:::

### The People Management Screen

The People management screen displays a list of all users on your site with their:
- Username
- Status (Active/Blocked)
- Roles
- Member since date
- Last access date

![People Management Screen](/images/bioland/bl2-01-image-8.png)

You can filter and sort the list to find specific users.

### Creating New Users

There are two ways users can be added to the system:

#### Method 1: Site Manager Creates User

1. Access the User Management interface using one of the methods above
2. Click the **Add user** button (there is also a direct link from the Admin menu)

   ![Add User Button](/images/bioland/bl2-04-003.png)

3. Fill in the Create new account form:

   ![Create New Account Form](/images/bioland/bl2-01-image-9.png)

   | Field | Required | Explanation |
   |-------|----------|-------------|
   | **Email address** | Yes | Required for password reset and various notifications |
   | **Username** | Yes | The name used for login |
   | **Password** | Yes | The initial password; however, there is a way for the user to set their own on first login |
   | **Status** | Yes (Blocked or Active) | Blocked users cannot log in — only Active ones can |
   | **Roles** | No (multi-choice) | Higher-level role includes functionalities of all lower-level roles. **Site Manager** is the highest; **Content Manager** can create content and manage menus; **Contributor** can create content for review but cannot publish directly |
   | **Notify user of new account** | No (checkbox) | If checked, the new user receives an email with a password-reset link. If unchecked, they need to be told their information separately |
   | **Picture** | No | User profile picture |
   | **Site language** | Yes (drop-down) | Admin interface language. English is a useful default, especially while learning the interface |
   | **Local setting** | Yes (drop-down) | Defaults to UTC but can be set to a local time zone. Affects times and dates displayed on the admin interface |

4. Click **Create new account** to save. This returns the Site Manager to the User Management screen. If "Notify user of new account" was selected, the new user receives the email.

#### Method 2: Self-Registration (User Requests Access)

When self-registration is enabled, users can request access themselves:

1. The user clicks the **Login** button from the main menu bar and then selects the **Create new account** tab

   ![Login - Create New Account Tab](/images/bioland/bl2-04-004.png)
2. They fill in the email address and username fields. A profile picture can be uploaded but is optional. At this point, no password is chosen
3. Once the **Create new account** button is clicked, the user is returned to the home page. Their account is not ready yet
4. The user receives an email notifying them of their request and that it is pending admin approval
5. CHM Helpdesk also receives a notification email as part of anti-spam monitoring

   ![Self-Registration Form](/images/bioland/bl2-04-005.png)

6. A Site Manager must then review and approve the account

### Approving Self-Registered Users

When a user self-registers, their account starts in **Blocked** status, preventing them from being able to log in. To approve them:

1. Navigate to the People management screen
2. Find the user (they will show as "Blocked"). If there are many accounts in the list, use the **Status** filter to review only blocked accounts. New accounts will also show "Last access" as "never"
3. Click the **Edit** button next to the user

   ![User Management - Edit Blocked User](/images/bioland/bl2-04-006.png)

4. On the edit screen (nearly identical to the new user creation form):
   - You **do not need** to create a password or choose Notify options — both are forced by the self-registration workflow
   - Review and edit the user's name if needed
   - Verify the email address
   - **Select the correct role(s)** for this user
   - **Change the status to "Active"** (this is the most important step!)

::: warning Important
The most important step when approving a self-registered user is to change their status from **Blocked** to **Active**. Without this, the user cannot log in.
:::

5. Save the changes

6. The user receives an email notification:
   - States that their account was approved
   - Provides a single-use password-reset link
   - Allows them to set their own password and log in

### Managing User Permissions

To modify an existing user's access:

1. Go to User Management interface
2. Find the user you want to modify
3. Click on their username or the **Edit** button
4. Adjust the following as needed:
   - **Status**: Active or Blocked
   - **Roles**: Add or remove user roles
   - **Email**: Update if necessary
5. Save changes

::: tip Blocking Users
To temporarily disable a user's access without deleting their account, change their status to **Blocked**. They can be reactivated later by changing the status back to **Active**.
:::

## Managing Menus

Menus control the navigation structure of your site. You can add content to menus to make it easily accessible to visitors.

### Introduction

While the menus can be edited from the administration interface, sometimes it is useful to add new content item to the menu directly during the creation, or edit an existing item to add it to the menu. Both can be done in the same way, as part of the item editing interface.

The menu editing is available to users with **Content Manager** role and above. It is not available to the Contributor role.

### Editing Interface

![Menu Settings Panel](/images/bioland/menu-settings-panel.png)

The editing interface is part of the right tool bar called **"Menu setting"**. By default, the interface is closed and only the current status shown.

Expand the interface to see the checkbox to provide a menu link.

Once the checkbox is clicked, there are four fields. Of those, two are compulsory and the other two are optional.

| Field | Explanation |
|-------|-------------|
| **Menu link title** | The text that will appear in the menu (see later section for translations) |
| **Description** | Optional. Not used at the moment. |
| **Parent link** | The choice of the menu and submenu, under which the link will appear. This includes both top and bottom menus. |
| **Weight** | Optional. Allows to control the order of this item within the chosen menu. While it can be controlled from here, it is easy to use drag and drop in the main menu administration interface for this purpose. |

Please note that while it is technically possible to place a menu link under another menu link, such as `Footer/Quick Links/Home`, it will not display as a submenu. So, the correct location in this example would be `Footer/Quick Links`.

![Menu Settings - Parent Link](/images/bioland/menu-settings---parent-link.png)

Similarly, when the menu has several submenus, the item needs to be added at the level of the submenu. While additional submenus are allowed, care needs to be taken to avoid visual overflow of the content.

![Menu Submenu Level Selection](/images/bioland/menu-parent-link.png)

Use Weight field or main menu admin interface to control placement of the new menu item relative to the existing one.

Finally, if the document is not published, the link to it will not appear on the menu. Therefore, the menu link can be safely setup while the document is still in the draft mode.

::: info Menu Caching
Menus are not changed frequently and therefore are cached. Force refreshing the web page may be required to see the changes.
:::

### Menus and Their Visual Location

The following is the name of the menus in alphabetical order as presented by the interface and their visual location on the Bioland site:

| Menu | Location |
|------|----------|
| **Biodiversity Facts** | Top menu, 2nd |
| **Conventions & Protocols** | Top menu, 1st |
| **Cooperation** | Top menu, 4th |
| **Footer** | The bottom of the page with four-columns (submenus) |
| **Footer Credits** | Bottom-right of the page, under the footer |
| **Implementation** | Top menu, 3rd |
| **News & Updates** | Top menu, 5th |
| **Resources** | Top menu, 6th |

### Managing Menu Items from Admin Interface

To manage menus from the admin interface:

1. Access the Admin interface
2. Navigate to **Structure** > **Menus**
3. Select the menu you want to edit
4. You can:
   - Add new menu items
   - Drag and drop to reorder items
   - Edit existing menu items
   - Delete menu items
5. Save the menu when done

### Menu Best Practices

- Keep menu items concise and descriptive
- Organize content logically
- Avoid creating too many top-level items
- Use submenus for related content, but avoid deep nesting
- Test navigation from a user's perspective

::: tip Draft Content
If your content is not published, the menu link will not appear on the public site. This allows you to safely set up menu links while content is still in draft mode.
:::

::: info Menu Caching
Menus are cached for performance. You may need to force refresh your web browser (Ctrl+F5 or Cmd+Shift+R) to see menu changes immediately.
:::

## Translating Content

Bioland 2 supports multi-language content to reach a broader audience.

### Introduction

A piece of content can exist in all the languages of the site. The link between different translations of the same content item is maintained and some of the fields do not need to be translated, for example dates.

When showing an item or a menu linking to the item, the best available translation is shown. In cases where the translation does not exist, the default (usually English) version of the content or menu link is shown.

### How Translation Works

- Each content item can have multiple language versions (all 6 UN languages)
- Translations are linked to the original content
- Bioland tries to display content in the chosen language
- If a translation is not available, it falls back to the system language (usually English)
- Users can switch between available languages

::: tip Menu Translations
Remember that menus need to be translated separately. If content is translated but the menu link is not, the English menu text will show instead.
:::

### Checking Existing Translations

There are 3 ways to see the translations of an item:

#### 1. Using the Content Management Interface Language Filter

In the Content Management interface, switch to a specific language or to all languages using the Filter's Language drop-down. This is a good overview but makes it hard to see translations of an individual item. It allows you to:

![Content Management Language Filter](/images/bioland/bl2-06-000.png)

- View content in a specific language
- See all content items regardless of language
- Identify which items need translation

#### 2. Using the Translate Menu

From the Content Management interface, select **Translate** from the item's operations menu:

![Translate from Operations Menu](/images/bioland/bl2-06-001.png)

1. This shows all available translations for the current content item
2. You can see which languages have translations and which don't

#### 3. Viewing the Translate Tab

Choose the **Translate** tab while viewing the item itself:

![Translate Tab on Content Item](/images/bioland/bl2-06-002.png)

Both options 2 and 3 end up on the same screen that allows you to see all existing translations and links to edit them. Translations can also be deleted from this screen.

![Translation Management Screen](/images/bioland/translation-tabs.png)

- All available language versions
- Publication status of each translation
- Quick access to create or edit translations

### Creating Translations

If a translation does not exist, an **Add** button will be available instead of Edit/Delete under the operations.

![Add Translation Screen](/images/bioland/bl2-06-003.png)

To create or edit a translation:

1. Navigate to the content item you want to translate
2. Look for the **Translate** tab or **Add Translation** option
3. Select the target language from the available options
4. Enter the translated content — not all fields can be translated, as some have their language-specific presentation generated from the underlying information:

#### Translatable Fields Reference

The following example shows which fields are translatable for a document content type:

| Field | Present in Translation | Notes |
|-------|:---------------------:|-------|
| **Content Type** | No | Can only be selected during item creation |
| **Title** | Yes | |
| **URLs, link and text** | Both | Allows pointing to a language-specific URL |
| **Body** | Yes | |
| **Published Date** | No | Presentation is automatically generated |
| **Attachments** | No | |
| **GBF Targets** | No | Numeric or using appropriate translation |
| **Thematic Areas** | No | Numeric or using appropriate translation |
| **Countries** | No | Numeric or using appropriate translation |
| **SDGs** | No | Numeric or using appropriate translation |
| **Menu link title** | Yes | Described in the Menu Translation section |

5. Set the publication status (Draft or Published)
6. Save the translation

#### Publication Workflow in Translation

**Published** is a status flag rather than a field. It is managed separately for each translation — it is possible to have a translation be unpublished even while the original document is already live. This supports a draft workflow for content translation and is reflected appropriately in the translation management screen.

A new translation can also be deleted from the translation screen — that's why the **Edit** button has a drop-down menu, but only for translations. The main item (with all its translations) can be deleted the usual way from the edit screen.

![Publication Workflow in Translation](/images/bioland/bl2-06-004.png)

::: warning Publication Status
A translation can be in Draft mode while the original content is Published. Draft translations will not be visible to public users until published.
:::

### Translation Best Practices

- Ensure translations are accurate and culturally appropriate
- Keep the same structure and formatting as the original
- Translate all important fields, including metadata
- Review translations with native speakers when possible
- Use consistent terminology across all translations
- Remember that some fields (like dates) are shared and don't need translation
- Test how content appears in each language

### Viewing Unpublished Translations

The system distinguishes between:

- **Published translations**: Visible to all users
- **Draft/Unpublished translations**: Only visible to content managers and above

Note that unpublished translations, just like unpublished primary content items, do not show up under the main content tab in the Content Administration screen. Rather, they show up under the **Unpublished** tab, which shows:

![Unpublished Translations Tab](/images/bioland/bl2-06-005.png)

- Content items with unpublished translations
- The specific languages that are unpublished
- Quick access to edit and publish

### Common Translation Scenarios

**All Content Published**  
All language versions are live and visible to users based on their language preference.

**Some Translations Missing**  
Users will see the default language version (typically English) for untranslated content.

**Draft Translations**  
Content managers can preview and edit draft translations before making them public.

### Menu Translation

![Translation Tabs](/images/bioland/translation-tabs.png)

Content may exist in all 6 UN languages and the content in different languages is linked together. Bioland tries to display content in the chosen language and will fall back to system language (usually English), when the translation is not available.

This applies to the menus as well. If the content is translated, but the menu link is not, the English menu text will show instead.

#### Translating a Menu Title

The easiest way to translate a menu title is to edit the translation of the content item. The menu editing interface will already be open with the original (English) title shown:

![Menu Settings in Translation](/images/bioland/menu-settings-in-translation.png)

1. Navigate to the translated version of the content item (or create a new translation)
2. In the **Menu settings** panel on the right, the original (English) menu link title will be displayed
3. Copy or enter the translated title into the **Menu link title** field

![French Menu Title Example](/images/bioland/french-menu-title.png)

4. Save the translation

Once saved, the menu will automatically use the new available translation for that language and the original version for English.

::: tip Menu Translations
Remember that menus need to be translated separately. If content is translated but the menu link is not, the English menu text will show instead.
:::

## Troubleshooting

### Common Issues

**Can't log in:**
- Verify your username and password
- Check if your account is active
- Contact your administrator for assistance

**Content not appearing:**
- Check if content is published (not in draft)
- Verify content type settings
- Clear your browser cache

**Search not finding content:**
- Try different keywords
- Use the correct search tab (Site vs Secretariat)
- Check content indexing status

### Getting Help

If you encounter issues not covered in this guide:

1. Check the admin documentation
2. Contact your site administrator
3. Reach out to Bioland 2 support

## Quick Reference

### Important URLs

- **Your Site**: Access your Bioland 2 instance
- **Admin Panel**: `/admin` (typically)
- **Help/Documentation**: Check your site footer or admin menu

---

*This guide covers the essential features of Bioland 2.*
