# 🚀 EXECUTE NOW - Your Terminal Commands

**YOU ARE LOGGED INTO CURSOR ✅**
**YOU ARE LOGGED INTO GITHUB ✅**

## ⏱️ Time to Completion: 20 MINUTES

---

## STEP 1: Open Terminal in Cursor (30 seconds)

1. Open Cursor IDE (already logged in)
2. Press: `Ctrl+`` (backtick) or go to Terminal → New Terminal
3. You should see a terminal at the bottom of Cursor

---

## STEP 2: Clone Repository (1 minute)

Copy and paste these commands ONE BY ONE:

```bash
# Navigate to your projects folder (adjust path as needed)
cd ~/Desktop

# Clone the repo
git clone https://github.com/cipher0x9/cypher0x9-ai-website.git

# Enter the directory
cd cypher0x9-ai-website

# Open in Cursor
cursor .
```

**Expected Result:** Cursor opens with your project folder

---

## STEP 3: Generate ALL Code Files with Cursor AI (10 minutes)

### Method A: Use Cursor Composer (FASTEST)

1. Press `Ctrl+Shift+K` (or Cmd+Shift+K on Mac)
2. This opens Cursor Composer - the multi-file AI assistant
3. Paste this EXACT prompt:

```
I need you to generate a complete Next.js 14 project with the App Router. Here's what I need:

CONFIGURATION FILES:
1. tsconfig.json - Strict TypeScript config
2. next.config.js - Image optimization, strict mode
3. tailwind.config.js - Dark theme, animations, glassmorphism
4. postcss.config.js - Standard PostCSS setup

APP STRUCTURE:
5. app/layout.tsx - Root layout with metadata, dark theme
6. app/page.tsx - Homepage with hero, animated background, chat widget trigger, social grid
7. app/globals.css - Tailwind imports + custom animations
8. app/api/chat/route.ts - POST endpoint for streaming AI responses

COMPONENTS:
9. components/AnimatedCat.tsx - Three.js 3D cat avatar (60fps, mouse-responsive)
10. components/ChatWidget.tsx - Floating chat UI (bottom-right, minimizable, streaming)
11. components/SocialGrid.tsx - Grid of 15+ social platform cards
12. components/Hero.tsx - Hero section with gradient background

AI SYSTEM:
13. lib/agents/coordinator.ts - Routes queries to specialists
14. lib/agents/web3-expert.ts - DeFi, NFTs, Base L2 specialist
15. lib/agents/ai-specialist.ts - ML, AI frameworks expert
16. lib/agents/network-engineer.ts - CCNA, VoIP, Cisco expert  
17. lib/agents/content-creator.ts - Blog, social media specialist
18. lib/supabase.ts - Supabase client setup
19. lib/anthropic.ts - Claude AI client

DATA:
20. data/social-platforms.ts - Array of 15+ social media configs:
   - X/Twitter, Instagram, Threads, LinkedIn, Facebook
   - Bluesky, Farcaster, Substack, Zora, Base
   - GitHub, Linktree, StockTwits
   All with @cypher0x9 handle

ENVIRONMENT:
21. .env.example - Template with all required env vars

REQUIREMENTS:
- TypeScript strict mode
- Tailwind dark theme with purple/blue gradients
- All components use 'use client' where needed
- Framer Motion for animations
- Error boundaries and loading states
- Mobile-first responsive
- Professional production code

Generate ALL these files with complete, working code.
```

4. Press Enter and wait 5-10 minutes for Cursor to generate all files
5. Review the generated files
6. Accept the changes

### Method B: Use Regular Cursor Chat (Alternative)

1. Press `Ctrl+L` (or Cmd+L)
2. Use the same prompt above
3. Apply changes file by file

---

## STEP 4: Add Environment Variables (2 minutes)

1. In Cursor, create a new file: `.env.local`
2. Add this content:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://idqxlneejycvznavhkan.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkcXhsbmVlanljdnpuYXZoa2FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxMDY4NzYsImV4cCI6MjA0ODY4Mjg3Nn0.NWFjNTQzYjgtNjE5Yy00ZTQzLWI1ZDEtMzQwNjU4YzM4ZGVi

# Claude AI
ANTHROPIC_API_KEY=your-claude-key-here

# Site
NEXT_PUBLIC_SITE_URL=https://cypher0x9.com
```

3. Get your Claude API key from: https://console.anthropic.com/settings/keys
4. Replace `your-claude-key-here` with your actual key

---

## STEP 5: Install Dependencies (3 minutes)

In the Cursor terminal:

```bash
npm install
```

**Wait for installation to complete...**

---

## STEP 6: Test Locally (2 minutes)

```bash
npm run dev
```

1. Open browser to: http://localhost:3000
2. You should see:
   - Your homepage
   - Animated cat avatar
   - Social media grid
   - Chat widget (bottom-right)
3. Test the chat - ask: "What can you help me with?"

**If it works locally, proceed to deployment!**

---

## STEP 7: Push to GitHub (1 minute)

```bash
# Stage all changes
git add .

# Commit
git commit -m "Complete Next.js app with AI agents, animated cat, and social integration"

# Push
git push origin main
```

---

## STEP 8: Deploy to Vercel (3 minutes)

```bash
# Install Vercel CLI if you don't have it
npm i -g vercel

# Deploy
vercel
```

**Follow the prompts:**
1. "Set up and deploy?" → YES
2. "Which scope?" → Select your account
3. "Link to existing project?" → NO
4. "Project name?" → cypher0x9-ai-website
5. "Directory?" → ./ (just press Enter)
6. "Override settings?" → NO

**Vercel will:**
- Build your project
- Deploy it
- Give you a URL: `https://cypher0x9-ai-website.vercel.app`

---

## STEP 9: Add Environment Variables to Vercel (2 minutes)

1. Vercel dashboard will open automatically
2. Or go to: https://vercel.com/cypher0x9s-projects/cypher0x9-ai-website
3. Go to "Settings" → "Environment Variables"
4. Add these variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `ANTHROPIC_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`
5. Click "Save"
6. Go to "Deployments"
7. Click "... " next to latest deployment
8. Click "Redeploy"

---

## STEP 10: Add Custom Domain (Optional - 2 minutes)

1. In Vercel project settings
2. Go to "Domains"
3. Add: `cypher0x9.com`
4. Follow DNS instructions for NameCheap

---

## ✅ VERIFICATION CHECKLIST

- [ ] Website loads at Vercel URL
- [ ] 3D cat avatar animates
- [ ] Chat widget appears (bottom-right)
- [ ] Chat responds to messages
- [ ] Social media grid displays all 15+ platforms
- [ ] All links work
- [ ] Mobile responsive

---

## 🎯 SUCCESS!

Your AI agent website is now LIVE at:
`https://cypher0x9-ai-website.vercel.app`

And if you added custom domain:
`https://cypher0x9.com`

---

## 🔧 TROUBLESHOOTING

### If `cursor .` doesn't work:
```bash
# Open Cursor first, then:
# File → Open Folder → Select cypher0x9-ai-website folder
```

### If Cursor can't generate all files at once:
- Generate in smaller batches
- Start with config files
- Then app structure
- Then components
- Then lib/agents

### If npm install fails:
```bash
rm -rf node_modules package-lock.json
npm install
```

### If AI responses don't work:
- Check ANTHROPIC_API_KEY is set correctly
- Verify API key has usage credits
- Check Vercel logs for errors

---

## ⏱️ ESTIMATED TIMELINE

- Terminal setup: 30 seconds ✅
- Clone repo: 1 minute ✅
- Generate code: 10 minutes ⏳ (CRITICAL STEP)
- Add env vars: 2 minutes
- Install deps: 3 minutes  
- Test locally: 2 minutes
- Push to GitHub: 1 minute
- Deploy to Vercel: 3 minutes
- Configure Vercel: 2 minutes

**TOTAL: ~25 minutes**

---

**START NOW. The infrastructure is ready. Your tools are ready. Execute these steps and your AI agent will be alive!** 🚀
