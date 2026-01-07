# Easy Meets Web

Web landing page for sharing Easy Meets plans. When users share a plan link, recipients see a beautiful preview with:

- Plan name and date/time
- Who invited them
- List of places with photos
- Add to Calendar (Apple & Google)
- Open in App / Download buttons

## Features

- 📱 Mobile-first design
- 🔗 Deep linking to the app
- 📅 Add to Calendar (Apple Calendar & Google Calendar)
- 🖼️ Open Graph meta tags for rich link previews in iMessage/social
- ⚡ Fast loading with Next.js

## Setup

### 1. Clone and install

```bash
cd easymeets-web
npm install
```

### 2. Configure environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Get these from your Supabase project: **Settings > API**

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000/plan/348](http://localhost:3000/plan/348) (replace 348 with a real plan ID)

### 4. Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com)
3. Import the repo
4. Add environment variables in Vercel dashboard
5. Deploy!

### 5. Connect your domain

In Vercel:
1. Go to your project > Settings > Domains
2. Add `easymeets-app.com`
3. Follow Vercel's instructions to update DNS in Namecheap

In Namecheap:
1. Go to Domain List > Manage > Advanced DNS
2. Add the records Vercel provides (usually A record and CNAME)

## Supabase RLS Note

Make sure your Supabase tables allow public read access for shared plans. You may need to add a Row Level Security (RLS) policy:

```sql
-- Allow anyone to read plans (for sharing)
CREATE POLICY "Public can view plans" ON plans
  FOR SELECT USING (true);

-- Or more restrictive: only shared/public plans
CREATE POLICY "Public can view shared plans" ON plans
  FOR SELECT USING (is_shared = true);
```

Similarly for `plan_places`, `cached_places`, `profiles`, and `plan_members` tables.

## URLs

- Home: `https://easymeets-app.com`
- Plan share: `https://easymeets-app.com/plan/[id]`

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (database)
