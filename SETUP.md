# Setup Guide — Lumière E-commerce

Follow these steps to run the project locally and deploy it to Vercel.

## 1. Prerequisites

- Install **Node.js 18 or newer**: https://nodejs.org
- Install **VS Code** (recommended editor): https://code.visualstudio.com
- A **GitHub** account (you already have one)
- A **Vercel** account (you already have one)

## 2. Set up the project locally

Open a terminal in the project folder and run:

```bash
npm install
```

This downloads all dependencies. It may take 1-2 minutes.

Then start the dev server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser. The site should be running.

## 3. Push the project to GitHub

In the project folder, open a terminal and run:

```bash
git init
git add .
git commit -m "Initial commit — Lumière e-commerce"
```

Then go to GitHub and create a new **empty** repository (do not add a README, .gitignore, or license).

Copy the repo URL and run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/lumiere-ecommerce.git
git branch -M main
git push -u origin main
```

## 4. Deploy to Vercel

1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New → Project**.
3. Find your `lumiere-ecommerce` repo and click **Import**.
4. Leave all default settings (Vercel auto-detects Next.js).
5. Click **Deploy**.

In about 60-90 seconds your site will be live at a URL like:
`https://lumiere-ecommerce.vercel.app`

## 5. Future updates

Whenever you change something locally:

```bash
git add .
git commit -m "describe your change"
git push
```

Vercel will automatically redeploy your site within a minute.

## Troubleshooting

**`npm install` fails**
Make sure you have Node.js 18 or newer. Run `node -v` to check.

**Images don't load**
Check your internet connection. Images come from Unsplash.

**Build fails on Vercel**
Run `npm run build` locally first to catch errors before pushing.

## What to show your teacher

1. The **live URL** on Vercel
2. The **GitHub repository** with all code
3. The **README.md** in the repo (explains architecture)
4. A walk-through of: browsing products → adding to cart → checkout → success page
5. Open the browser DevTools Network tab and show that `/api/orders` is a real POST request hitting your backend

Good luck with your project!
