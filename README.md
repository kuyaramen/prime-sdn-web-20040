# PRIME SDN (Prime Surigao 2040)

**PRIME SDN** is a public-facing provincial innovation and vision portal for Surigao del Norte, Philippines, inspired by Innovate Iloilo. It acts as a public movement showcase and a content management system (CMS) so non-technical staff can publish and coordinate activities, news, startups directory, and governance policy indices.

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

- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Database/ORM**: Prisma ORM v7 with SQLite (local development) and PostgreSQL adapter ready (production)
- **Authentication**: NextAuth.js (v4) with credentials provider
- **Validation**: Zod + React Hook Form
- **Icons**: Lucide React

---

## 📦 Getting Started

### 1. Prerequisite Settings
Create a `.env` file in the root directory (already pre-configured for local development):
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="supersecretkey"
RESEND_API_KEY="your-resend-api-key"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Generate Database and Seed Data
Initialize tables and generate Prisma client (configured for Prisma 7+ using `better-sqlite3` driver adapter):
```bash
npx prisma generate
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
