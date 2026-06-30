# PRIME SDN (Prime Surigao 2040)

**PRIME SDN** is a comprehensive digital innovation ecosystem and public engagement platform designed specifically for the Province of Surigao del Norte, Philippines. It serves as a centralized hub that promotes innovation, supports startups, showcases research, manages provincial initiatives, publishes news and events, provides governance transparency, and connects academia, industry, government, investors, and communities.

The platform integrates multiple functional areas into a cohesive digital experience:

- **Public Website**: Showcases the province's vision, strategic framework, activities, news, and startup ecosystem
- **Content Management System**: Enables non-technical staff to publish and coordinate content across all platform sections
- **Media Management**: Centralized library for managing images, documents, and digital assets
- **Startup Directory**: Profiles local startups, their innovations, and contributions to the ecosystem
- **Activities Management**: Coordinates innovation events, workshops, programs, and community initiatives
- **News Management**: Publishes announcements, press releases, success stories, and updates
- **Governance Portal**: Provides transparency through policies, ordinances, and executive orders
- **Interactive Strategic Framework**: Visualizes the province's 7 Innovation Pillars and their interconnected contributions to long-term development

---

## 🚀 Features

- **Dynamic Homepage**: Features hero animation, video showcase, vision statement, 7 Pillars interactive component cards, activities slider, latest news feed, and newsletter registration.
- **Admin CMS Dashboard**: Secure `/admin` panel using NextAuth credentials provider to manage content in real-time.
  - **Activities CRUD**: Create, edit, and delete activities.
  - **News & Blogs CRUD**: Manage announcements, press releases, and success stories.
  - **Startups Directory CRUD**: Register local startups, specify location, website, categories, and founded dates.
  - **Policies & Governance CRUD**: Upload ordinances and executive orders with attachments.
  - **Pillars Framework Config**: Configure ordering, badges, and descriptions for the 7 Innovation Pillars.
  - **Inquiries Inbox**: View and mark contact submissions as read or delete them.
  - **Subscriber Registry**: Access subscribers list and export list as Excel-compatible CSV.
  - **User Management**: Admins can add or delete administrative/editor accounts.
- **Robust Design System**: Styled with a maroon and teal color system, custom typography (Playfair Display + Inter), prefers-reduced-motion animation compliance (Framer Motion), and full mobile-first responsive design.
- **Built-in SEO & Performance**: Automatic generation of `sitemap.xml` and `robots.txt` based on active database records. Fully semantic HTML layout.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Database/ORM**: Prisma ORM v7 with PostgreSQL
- **Database Hosting**: Supabase
- **Authentication**: NextAuth.js (v4) with credentials provider
- **Validation**: Zod + React Hook Form
- **Animations**: Framer Motion
- **Icons**: Lucide React

---

## 🎯 Project Vision

PRIME SDN embodies the vision of transforming Surigao del Norte into a Smart Province through sustainable development, innovation, and digital transformation. The platform is built on core themes:

- **Smart Province**: Leveraging technology to improve governance, service delivery, and citizen engagement
- **Sustainable Development**: Balancing economic growth with environmental stewardship and social inclusion
- **Innovation Ecosystem**: Creating an environment where ideas flourish, startups thrive, and research translates to impact
- **Entrepreneurship**: Supporting local founders, micro-enterprises, and SMEs with resources and visibility
- **Digital Transformation**: Modernizing traditional sectors (agriculture, fisheries, tourism, mining) through technology
- **Research & Education**: Connecting academic institutions with industry to drive knowledge-based development
- **Collaboration**: Fostering partnerships between government, private sector, academia, and communities
- **Inclusive Growth**: Ensuring innovation benefits reach all sectors and municipalities across the province

---

## 🌟 PRIME SDN Framework

The platform features an original interactive ecosystem visualization that represents the province's strategic innovation framework. Inspired by interconnected systems, the framework visualizes seven strategic pillars as orbiting elements around a central vision, each contributing uniquely to Surigao del Norte's long-term development:

1. **Governance & Policy**: Establishing regulatory frameworks that enable innovation and ease of doing business
2. **Education & Talent**: Developing future-ready skills, digital literacy, and technical capacity among the workforce
3. **Research & Development**: Promoting scientific research, localized technology transfer, and sustainable solutions
4. **Startup Ecosystem**: Supporting entrepreneurs with incubation, mentoring, and access to capital
5. **Economic Growth**: Driving investment, job creation, and digital empowerment in traditional sectors
6. **Culture, Arts & Tourism**: Leveraging cultural heritage and creative industries for sustainable tourism innovation
7. **Infrastructure & Connectivity**: Building digital infrastructure and innovation spaces for collaboration

This framework is original to PRIME SDN and designed specifically for Surigao del Norte's unique context as an island province with diverse economic sectors and rich cultural assets.

---

## 📦 Getting Started

### 1. Prerequisite Settings
Create a `.env` file in the root directory with your Supabase configuration:
```env
DATABASE_URL="postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres"
NEXTAUTH_SECRET="your-super-secret-key"
NEXTAUTH_URL="http://localhost:3000"
RESEND_API_KEY="your-resend-api-key"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Generate Database and Seed Data
Initialize tables and generate Prisma client:
```bash
npx prisma generate
npx prisma db push
npx tsx prisma/seed.ts
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the public portal.

---

## 🔒 Administrative Portal

After running the seed script, a default development administrator account is created automatically.

If you need to change the default credentials, edit the seed data located in:

prisma/seed.ts
  
---

## 🗺️ Project Architecture

```
├── prisma/
│   ├── schema.prisma   # Database Models
│   └── seed.ts         # Development Seed Data
├── src/
│   ├── app/            # Next.js App Router (Public routes & /admin)
│   ├── components/     # UI components & layouts (Header, Footer, LayoutWrapper)
│   ├── hooks/          # React hooks (Reduced motion helper)
│   ├── lib/            # Utilities (db client, NextAuth options, validations, email)
│   └── middleware.ts   # NextAuth route protection middleware
```
