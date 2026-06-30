# Supabase Migration Plan - PRIME SDN

## Executive Summary

This document outlines the migration strategy for integrating Supabase into the existing PRIME SDN web application. The migration will replace the local SQLite database with Supabase PostgreSQL while preserving all existing functionality, UI/UX, and business logic.

**Current State:**
- Database: SQLite (local file-based)
- ORM: Prisma with @prisma/adapter-better-sqlite3
- Auth: NextAuth.js with Credentials provider
- Storage: Mock data in Media Library (no actual file uploads)

**Target State:**
- Database: Supabase PostgreSQL
- ORM: Prisma with @prisma/adapter-pg
- Auth: Supabase Auth (or enhanced NextAuth with Supabase)
- Storage: Supabase Storage with actual file uploads

---

## 1. Project Analysis Summary

### 1.1 Project Structure
```
prime-sdn/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── admin/       # Admin CMS (74 items)
│   │   ├── api/         # API routes
│   │   └── [public]     # Public pages
│   ├── components/      # React components
│   ├── lib/             # Utilities
│   │   ├── auth.ts      # NextAuth configuration
│   │   ├── db.ts        # Prisma client
│   │   └── validations.ts
│   └── hooks/
├── prisma/
│   ├── schema.prisma    # 23 models
│   └── config.ts
└── public/              # Static assets
```

### 1.2 Prisma Schema Models (23 total)

**Core Models:**
- Pillar, Activity, NewsPost, Startup, Policy, ContactSubmission, NewsletterSubscriber, AdminUser
- RoadmapMilestone, RoadmapTheme, Program, Video

**About Content Models:**
- AboutStory, VisionLetter, MissionCard, CoreValue, GovernancePrinciple, FrameworkPillar
- StrategicPartner, DownloadResource, FAQ, OrganizationalRole, AboutPage

### 1.3 Authentication Implementation
- NextAuth.js v4.24.14
- Credentials provider with email/password
- bcryptjs for password hashing
- JWT session strategy
- AdminUser model with roles: super_admin, admin, editor, startup_manager, viewer

### 1.4 Image Upload Implementation
- **Current Status**: No actual file upload implementation
- Media Library uses mock data (hardcoded array)
- No backend API for file uploads
- All images currently stored in /public directory

### 1.5 API Routes Pattern
All API routes follow this pattern:
```typescript
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// Authentication check
const session = await getServerSession(authOptions);
if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

// Prisma CRUD operations
const data = await db.model.findMany/create/update/delete();
```

### 1.6 Dependencies Status
- ✅ @supabase/supabase-js: v2.108.2 (already installed)
- ✅ @prisma/adapter-pg: v7.8.0 (already installed)
- ✅ @prisma/client: v7.8.0 (already installed)
- ✅ prisma: v7.8.0 (already installed)
- ⚠️ @prisma/adapter-better-sqlite3: v7.8.0 (will be removed)

---

## 2. Migration Strategy

### 2.1 Phase 1: Database Migration (High Priority)

**Objective**: Replace SQLite with Supabase PostgreSQL

**Steps:**
1. Create Supabase project
2. Update DATABASE_URL environment variable
3. Update Prisma schema datasource provider
4. Update db.ts to use PostgreSQL adapter
5. Generate Prisma migration
6. Push schema to Supabase
7. Migrate existing data (if any)
8. Test database connections

**Files to Modify:**
- `prisma/schema.prisma` - Change provider from "sqlite" to "postgresql"
- `src/lib/db.ts` - Replace SQLite adapter with PostgreSQL adapter
- `.env` - Add DATABASE_URL (Supabase connection string)

**Risk Level**: Medium - Database migration is critical but reversible with backups

### 2.2 Phase 2: Environment Configuration (High Priority)

**Objective**: Configure Supabase environment variables

**Required Variables:**
```env
DATABASE_URL=postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres
NEXT_PUBLIC_SUPABASE_URL=https://[project-ref].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[anon-key]
SUPABASE_SERVICE_ROLE_KEY=[service-role-key]
NEXTAUTH_SECRET=[existing or new]
NEXTAUTH_URL=[existing or new]
```

**Files to Modify:**
- `.env` - Add Supabase variables
- `.env.example` - Add Supabase variables as template

**Risk Level**: Low - Environment variables only

### 2.3 Phase 3: Supabase Client Setup (Medium Priority)

**Objective**: Create reusable Supabase client utilities

**Files to Create:**
- `src/lib/supabase.ts` - Public client (browser)
- `src/lib/supabase-admin.ts` - Admin client (server-side)
- `src/lib/supabase-server.ts` - Server client (SSR)

**Implementation:**
```typescript
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// src/lib/supabase-admin.ts
import { createClient } from '@supabase/supabase-js'

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
)
```

**Risk Level**: Low - New files, no existing code changes

### 2.4 Phase 4: Authentication Migration (Medium Priority)

**Decision**: Keep NextAuth.js but integrate with Supabase Auth

**Rationale:**
- NextAuth is deeply integrated throughout the codebase
- All API routes use `getServerSession(authOptions)`
- Admin CMS relies on NextAuth session handling
- Minimal disruption to existing code

**Options:**
1. **Option A (Recommended)**: Keep NextAuth, use Supabase as user store
   - Pros: Minimal code changes, proven stability
   - Cons: Dual auth systems

2. **Option B**: Full migration to Supabase Auth
   - Pros: Single auth system, Supabase features
   - Cons: Major refactoring, high risk

**Selected Approach**: Option A - Keep NextAuth with Supabase integration

**Steps:**
1. Keep existing NextAuth configuration
2. Optionally add Supabase Auth provider for future use
3. Continue using AdminUser model for role management
4. Add Supabase Auth as optional OAuth provider (Google, GitHub)

**Files to Modify:**
- `src/lib/auth.ts` - Add Supabase Auth providers (optional)
- `src/app/api/auth/[...nextauth]/route.ts` - No changes needed

**Risk Level**: Medium - Authentication is critical

### 2.5 Phase 5: Storage Integration (Medium Priority)

**Objective**: Replace mock Media Library with Supabase Storage

**Storage Buckets to Create:**
1. `hero` - Homepage hero images
2. `activities` - Activity cover images
3. `news` - News post images
4. `framework` - Framework illustrations
5. `downloads` - Downloadable files (PDFs, docs)
6. `documents` - Policy documents
7. `avatars` - User profile images
8. `logos` - Partner and startup logos
9. `partners` - Strategic partner logos
10. `gallery` - General gallery images

**Implementation Steps:**
1. Create Supabase Storage buckets via dashboard or API
2. Set bucket policies (public/private)
3. Create upload API routes
4. Update Media Library client to use real uploads
5. Update all forms to use Supabase Storage
6. Store only URLs in database

**Files to Create:**
- `src/app/api/upload/route.ts` - Generic upload handler
- `src/lib/storage.ts` - Storage utility functions

**Files to Modify:**
- `src/app/admin/media/MediaLibraryClient.tsx` - Replace mock with real uploads
- All admin forms with image inputs - Update to use upload API

**Risk Level**: Medium - File uploads are complex

### 2.6 Phase 6: API Routes Verification (Low Priority)

**Objective**: Ensure all API routes work with new database

**Verification Steps:**
1. Test all CRUD操作
2. Verify authentication checks
3. Test JSON parsing for array/object fields
4. Verify relation queries
5. Test error handling

**API Routes to Test:**
- `/api/admin/about/*` - 24 routes (newly created)
- `/api/admin/programs` - Programs CRUD
- `/api/admin/videos` - Videos CRUD
- `/api/contact` - Contact form
- `/api/newsletter` - Newsletter subscription

**Risk Level**: Low - Prisma abstracts database differences

### 2.7 Phase 7: Testing & Validation (Low Priority)

**Test Coverage:**
1. Admin login/logout
2. All About module pages (13 pages)
3. Activities management
4. News management
5. Programs management
6. Videos management
7. Contact form
8. Newsletter subscription
9. Media library uploads
10. Public website pages

**Risk Level**: Low - Quality assurance

---

## 3. Detailed Implementation Plan

### 3.1 Database Migration Steps

**Step 1: Create Supabase Project**
- Go to https://supabase.com
- Create new project
- Choose region closest to users
- Set strong database password
- Save project reference URL

**Step 2: Update Prisma Schema**
```prisma
// prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

**Step 3: Update db.ts**
```typescript
// src/lib/db.ts
import { PrismaClient } from "@prisma/client";
import { PrismaPG } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const adapter = new PrismaPG();
  return new PrismaClient({ adapter });
}

export const db = globalForPrisma.prisma ?? createPrismaClient();
```

**Step 4: Update Environment Variables**
```env
DATABASE_URL=postgresql://postgres:[password]@db.[ref].supabase.co:5432/postgres
NEXT_PUBLIC_SUPABASE_URL=https://[ref].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[anon-key]
SUPABASE_SERVICE_ROLE_KEY=[service-role-key]
```

**Step 5: Generate and Push Migration**
```bash
npx prisma generate
npx prisma db push
```

**Step 6: Data Migration (if needed)**
- Export SQLite data
- Transform for PostgreSQL
- Import to Supabase
- Verify data integrity

### 3.2 Storage Implementation Steps

**Step 1: Create Storage Buckets**
Use Supabase dashboard or API to create buckets with appropriate policies.

**Step 2: Create Upload API**
```typescript
// src/app/api/upload/route.ts
import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File
  const bucket = formData.get('bucket') as string

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(`${Date.now()}-${file.name}`, file)

  if (error) return NextResponse.json({ error }, { status: 500 })

  return NextResponse.json({ url: data.path })
}
```

**Step 3: Update Media Library**
- Replace mock data with Supabase Storage API calls
- Implement real file upload
- Add progress indicators
- Implement delete functionality

### 3.3 Authentication Enhancement Steps

**Step 1: Add Supabase Auth Providers (Optional)**
```typescript
// src/lib/auth.ts
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    // Keep existing Credentials provider
    CredentialsProvider({ ... }),
    
    // Add OAuth providers
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  // ... rest of config
}
```

**Step 2: Sync Supabase Auth Users (Optional)**
- Create trigger to sync AdminUser with Supabase auth.users
- Or use Supabase Auth as primary auth system

---

## 4. Risk Assessment & Mitigation

### 4.1 High Risks

**Risk 1: Data Loss During Migration**
- **Mitigation**: Backup SQLite database before migration
- **Mitigation**: Test migration on staging environment first
- **Mitigation**: Keep SQLite database as fallback

**Risk 2: Authentication Breakage**
- **Mitigation**: Keep NextAuth as primary auth system
- **Mitigation**: Test login/logout thoroughly after changes
- **Mitigation**: Have admin account credentials ready for testing

**Risk 3: API Route Failures**
- **Mitigation**: Prisma abstracts most database differences
- **Mitigation**: Test all API routes after migration
- **Mitigation**: Monitor error logs closely

### 4.2 Medium Risks

**Risk 4: Storage Upload Failures**
- **Mitigation**: Implement robust error handling
- **Mitigation**: Add file size and type validation
- **Mitigation**: Provide user feedback on upload status

**Risk 5: Performance Degradation**
- **Mitigation**: Use Supabase connection pooling
- **Mitigation**: Optimize Prisma queries
- **Mitigation**: Implement caching where appropriate

### 4.3 Low Risks

**Risk 6: Environment Variable Issues**
- **Mitigation**: Document all required variables
- **Mitigation**: Use .env.example as template
- **Mitigation**: Validate variables on startup

---

## 5. Rollback Plan

### 5.1 Database Rollback
1. Keep SQLite database backup
2. Revert DATABASE_URL to SQLite
3. Revert prisma schema provider to "sqlite"
4. Revert db.ts to use SQLite adapter
5. Run `npx prisma generate`

### 5.2 Authentication Rollback
1. Remove any new auth providers
2. Revert auth.ts to previous version
3. Test login with existing credentials

### 5.3 Storage Rollback
1. Keep Media Library mock data as fallback
2. Revert MediaLibraryClient.tsx to use mock data
3. Remove upload API routes

---

## 6. Success Criteria

### 6.1 Database
- ✅ All Prisma models created in Supabase
- ✅ All relations working correctly
- ✅ CRUD operations successful
- ✅ No data loss during migration

### 6.2 Authentication
- ✅ Admin login works with existing credentials
- ✅ Session management functional
- ✅ Role-based access control working
- ✅ Protected routes secure

### 6.3 Storage
- ✅ File uploads working to Supabase Storage
- ✅ Media Library displaying real files
- ✅ Image URLs stored in database
- ✅ Delete functionality working

### 6.4 API Routes
- ✅ All API routes responding correctly
- ✅ Authentication checks working
- ✅ Error handling functional
- ✅ JSON parsing for complex fields

### 6.5 UI/UX
- ✅ No visual changes to existing pages
- ✅ All animations working
- ✅ All forms functional
- ✅ No regression in user experience

---

## 7. Timeline Estimate

**Phase 1: Database Migration** - 2-3 hours
- Supabase project setup: 30 min
- Schema updates: 30 min
- Migration execution: 1-2 hours

**Phase 2: Environment Configuration** - 30 min
- Environment variables setup: 20 min
- Documentation: 10 min

**Phase 3: Supabase Client Setup** - 30 min
- Client creation: 20 min
- Testing: 10 min

**Phase 4: Authentication Migration** - 1-2 hours
- Integration: 1 hour
- Testing: 1 hour

**Phase 5: Storage Integration** - 3-4 hours
- Bucket creation: 30 min
- Upload API: 1 hour
- Media Library update: 1-2 hours
- Form updates: 1 hour

**Phase 6: API Routes Verification** - 2 hours
- Testing all routes: 1.5 hours
- Bug fixes: 30 min

**Phase 7: Testing & Validation** - 2-3 hours
- End-to-end testing: 2 hours
- Bug fixes: 1 hour

**Total Estimated Time: 11-15 hours**

---

## 8. Post-Migration Tasks

### 8.1 Documentation
- Update README with Supabase setup instructions
- Document environment variables
- Create deployment guide

### 8.2 Security
- Enable Row Level Security (RLS) in Supabase
- Review and update API route permissions
- Audit service role key usage

### 8.3 Monitoring
- Set up Supabase dashboard monitoring
- Configure error tracking
- Monitor database performance

### 8.4 Backup Strategy
- Configure Supabase automated backups
- Document backup restoration process
- Test backup restoration

---

## 9. Manual Steps Required

1. **Supabase Project Creation** - Manual via dashboard
2. **Storage Bucket Creation** - Manual via dashboard or API
3. **Environment Variables** - Manual configuration
4. **Data Migration** - If existing data needs migration
5. **RLS Policies** - Manual configuration for security
6. **Testing** - Manual verification of all features

---

## 10. Conclusion

This migration plan provides a structured approach to integrating Supabase into the PRIME SDN application while minimizing risk and preserving existing functionality. The incremental approach allows for testing at each phase and easy rollback if issues arise.

**Key Success Factors:**
- Maintain Prisma ORM throughout
- Keep NextAuth for authentication stability
- Incremental phased approach
- Comprehensive testing at each phase
- Clear rollback procedures

**Next Steps:**
1. Review and approve this migration plan
2. Set up Supabase project
3. Begin Phase 1: Database Migration
4. Proceed through remaining phases
5. Conduct thorough testing
6. Deploy to production

---

**Document Version:** 1.0  
**Last Updated:** June 30, 2026  
**Author:** Cascade AI Assistant
