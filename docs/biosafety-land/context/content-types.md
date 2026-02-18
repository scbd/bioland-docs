---
outline: false
---

# Content Types

Content types categorize and organize information in Biosafety Land. These types are **read-only** for all users and are managed at the system level.

## Overview

Content types (also called "tags") define the nature of content items in the system. When creating or viewing content, each item is assigned a content type that determines how it's displayed and organized.

| Content Type | URL Path | System Path | Description |
|-------------|----------|-------------|-------------|
| [Announcement](#announcement) | `/announcements` | `/taxonomy/term/49` | Official notices and updates |
| [Capacity-Building](#capacity-building) | `/capacity-building` | `/taxonomy/term/48` | Training and capacity resources |
| [Contact](#contact) | `/contacts` | `/taxonomy/term/50` | Contact information |
| [Document](#document) | `/documents` | `/taxonomy/term/12` | Downloadable documents and files |
| [FAQ](#faq) | `/faqs` | `/taxonomy/term/43` | Frequently asked questions |
| [Field Trial](#field-trial) | `/field-trials` | `/taxonomy/term/46` | LMO field trial information |
| [Image or Video](#image-or-video) | `/images-or-videos` | `/taxonomy/term/16` | Visual media content |
| [Meeting or Event](#meeting-or-event) | `/meetings-events` | `/taxonomy/term/3` | Conferences and events |
| [National Information](#national-information) | `/national-informations` | `/taxonomy/term/44` | Country-specific information |
| [National Mainstreaming Strategy](#national-mainstreaming-strategy) | `/national-mainstreaming-strategies` | `/taxonomy/term/47` | National biosafety strategies |
| [Other Resource](#other-resource) | `/other-resources` | `/taxonomy/term/55` | Miscellaneous resources |
| [Project](#project) | `/projects` | `/taxonomy/term/5` | Project information |
| [Related Website](#related-website) | `/related-websites` | `/taxonomy/term/13` | External website links |
| [Status of LMO](#status-of-lmo) | — | `/taxonomy/term/45` | LMO status records |

---

## Content Type Details

### Announcement

Official announcements, notices, and updates from the Biosafety Clearing-House.

- **Path**: `/announcements`
- **System Path**: `/taxonomy/term/49`
- **Plural**: Announcements
- **Use for**: News releases, important notices, policy updates, deadline reminders

---

### Capacity-Building

Resources related to training, education, and capacity development in biosafety.

- **Path**: `/capacity-building`
- **System Path**: `/taxonomy/term/48`
- **Plural**: Capacity-Building
- **Use for**: Training materials, workshops, educational resources, skill development programs

---

### Contact

Contact information for relevant organizations, agencies, or individuals.

- **Path**: `/contacts`
- **System Path**: `/taxonomy/term/50`
- **Plural**: Contacts
- **Use for**: National focal points, competent authorities, expert contacts, organizational directories

---

### Document

Formal documents available for download, including reports, guidelines, and official publications.

- **Path**: `/documents`
- **System Path**: `/taxonomy/term/12`
- **Plural**: Documents
- **Use for**: Official reports, guidelines, manuals, legal documents, PDFs

---

### FAQ

Frequently asked questions about biosafety topics.

- **Path**: `/faqs`
- **System Path**: `/taxonomy/term/43`
- **Plural**: FAQs
- **Description**: Frequently asked question
- **Use for**: Common questions, help content, user guidance, quick answers

---

### Field Trial

Information about field trials of Living Modified Organisms (LMOs).

- **Path**: `/field-trials`
- **System Path**: `/taxonomy/term/46`
- **Plural**: Field Trials
- **Use for**: Experimental release data, trial locations, trial conditions, monitoring reports

---

### Image or Video

Visual media content including photographs, diagrams, and video materials.

- **Path**: `/images-or-videos`
- **System Path**: `/taxonomy/term/16`
- **Plural**: Images or Videos
- **Use for**: Photos, infographics, diagrams, video presentations, visual documentation

---

### Meeting or Event

Conferences, workshops, meetings, and other events related to biosafety.

- **Path**: `/meetings-events`
- **System Path**: `/taxonomy/term/3`
- **Plural**: Meetings & Events
- **Use for**: Conferences, workshops, webinars, training sessions, international meetings

---

### National Information

Country-specific biosafety information and national implementation data.

- **Path**: `/national-informations`
- **System Path**: `/taxonomy/term/44`
- **Plural**: National Informations
- **Use for**: National biosafety frameworks, country profiles, implementation reports, national legislation

---

### National Mainstreaming Strategy

National strategies for mainstreaming biosafety into development plans.

- **Path**: `/national-mainstreaming-strategies`
- **System Path**: `/taxonomy/term/47`
- **Plural**: National Mainstreaming Strategies
- **Use for**: Integration strategies, cross-sector plans, policy frameworks, coordination mechanisms

---

### Other Resource

Miscellaneous resources that don't fit into other specific categories.

- **Path**: `/other-resources`
- **System Path**: `/taxonomy/term/55`
- **Plural**: Other Resources
- **Use for**: General resources, supplementary materials, reference documents

---

### Project

Information about biosafety-related projects and initiatives.

- **Path**: `/projects`
- **System Path**: `/taxonomy/term/5`
- **Plural**: Projects
- **Use for**: Research projects, implementation initiatives, collaborative programs, funded activities

---

### Related Website

Links to external websites and online resources related to biosafety.

- **Path**: `/related-websites`
- **System Path**: `/taxonomy/term/13`
- **Plural**: Related Websites
- **Use for**: Partner organizations, reference sites, data portals, international databases

---

### Status of LMO

Current status and regulatory decisions regarding specific Living Modified Organisms.

- **Path**: Not publicly accessible
- **System Path**: `/taxonomy/term/45`
- **Plural**: Status of LMOs
- **Use for**: Approval status, regulatory decisions, risk assessments, authorization records

---

## API Reference

Content types can be retrieved via the JSON:API endpoint:

```
GET /en/jsonapi/taxonomy_term/tags
```

This returns all available content types with their metadata including:
- `name` - Display name
- `field_plural` - Plural form for listings
- `path.alias` - URL path for the content type
- `description` - Optional description text

::: info Read-Only
Content types are system-managed and cannot be created, modified, or deleted by users. They are configured by site administrators at the platform level.
:::
