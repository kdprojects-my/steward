# Steward — Professional Oversight for Biotech Investment

A professional marketing and application platform for Steward, a non-profit oversight entity enabling family offices to invest directly in early-stage biotech, healthcare, and medical device companies.

## 🌐 Live Site
Once deployed: `https://yourusername.github.io/steward`

---

## 📁 Project Structure

```
steward/
├── index.html              ← Main entry point (all 9 modules)
├── .nojekyll               ← Required for GitHub Pages
├── README.md
│
├── css/
│   ├── base.css            ← CSS variables, reset, typography, animations
│   ├── components.css      ← Buttons, cards, forms, badges, tabs
│   └── modules/
│       ├── nav.css         ← Fixed navigation bar
│       ├── hero.css        ← Module 1: Hero section
│       ├── problem.css     ← Module 2: The Problem
│       ├── workflow.css    ← Module 3: How It Works
│       ├── investment.css  ← Module 4: Investment Case
│       └── sections.css    ← Modules 5–9: Services through Footer
│
├── js/
│   ├── main.js             ← Init, scroll reveal, nav behavior
│   └── modules/
│       ├── workflow.js     ← Three-perspective workflow toggle
│       ├── simulator.js    ← Investment portfolio simulator
│       ├── services.js     ← Expandable service cards
│       ├── application.js  ← Multi-step application form
│       └── faq.js          ← FAQ accordion
│
└── assets/                 ← Logo, images, icons (add as needed)
```

---

## 🚀 Deploying to GitHub Pages (Step by Step)

### Step 1: Upload files to your GitHub repo
1. Go to your GitHub repository
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop the entire `steward` folder contents (all files and folders)
4. Click **"Commit changes"**

### Step 2: Enable GitHub Pages
1. In your repo, click **"Settings"** (top menu)
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Source"**, select **"Deploy from a branch"**
4. Select branch: **`main`** (or `master`) and folder: **`/ (root)`**
5. Click **"Save"**

### Step 3: Your site is live
- Wait 2–3 minutes for deployment
- Visit: `https://yourusername.github.io/repository-name`
- GitHub will show you the URL in the Pages settings

---

## ✏️ How to Update Content

### Change contact email
Open `index.html` and search for `info@stewardoversight.org` — replace with your real email.

### Add law firm name
Open `index.html` — search for `"Law Firm Partner"` in the partners section and replace with the actual firm name.

### Update platform name
Open `css/base.css` and `index.html` — search for `Steward` to find all instances.

### Change colors
Open `css/base.css` — all colors are defined as CSS variables at the top of the file:
```css
--amber:       #C8922A;
--amber-light: #e5a83d;
--navy:        #0C1829;
```

---

## 🔌 Connecting a Backend (Phase 2)

The application form in Module 7 currently shows a success screen but does not send data anywhere. To connect it:

### Option A: Airtable (easiest — no coding required)
1. Create a free Airtable account at airtable.com
2. Create a base with fields matching the form
3. Get your API key and base ID
4. In `js/modules/application.js`, find `submitApplication()` and add:
```javascript
fetch('https://api.airtable.com/v0/YOUR_BASE_ID/Applications', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ fields: appData })
});
```

### Option B: Formspree (easiest email notifications)
1. Sign up at formspree.io
2. Replace the fetch call with a Formspree endpoint

---

## 📊 Dashboard (Phase 2)

The platform is structured to support a future authenticated dashboard:
- `/dashboard/investor` — family office portfolio view
- `/dashboard/company` — funded company portal  
- `/dashboard/admin` — Steward oversight admin view

These routes are placeholders for future development when a backend (Supabase, Firebase, or custom) is connected.

---

## 📝 Modules

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | Platform introduction and ecosystem diagram |
| 2 | The Problem | Diversification argument and comparison |
| 3 | How It Works | Three-perspective interactive workflow |
| 4 | Investment Case | Portfolio simulator with live sliders |
| 5 | Oversight Services | Expandable service cards |
| 6 | Who We Work With | Three-column partner overview |
| 7 | Application | Five-step company application form |
| 8 | FAQ | Accordion FAQ with audience filtering |
| 9 | Footer | CTA band, navigation, legal disclaimer |

---

## ⚠️ Important Notes

- Update the **contact email** before going live
- Add your **real law firm name** to the partners section
- The **legal disclaimer** in the footer should be reviewed by qualified counsel before pitching to investors
- All projected returns are **illustrative** — clearly marked as non-guaranteed

---

*Built for Steward Oversight — a non-profit entity*
