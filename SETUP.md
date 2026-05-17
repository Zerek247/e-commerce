# Setup Guide — Glow Beauty

Follow these steps to run the project locally and deploy it to Vercel.

## 1. Prerequisites

- **Node.js 18+**: https://nodejs.org
- **VS Code**: https://code.visualstudio.com
- GitHub account
- Vercel account

## 2. Run the project locally

In the project folder:

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/glow-beauty.git
git branch -M main
git push -u origin main
```

## 4. Deploy to Vercel

1. Go to vercel.com and sign in with GitHub
2. Add New → Project → select your `glow-beauty` repo
3. Leave default settings → Deploy
4. Live URL ready in ~90 seconds

## 5. Future updates

```bash
git add .
git commit -m "describe your change"
git push
```

Vercel auto-deploys within a minute.

## What's included

### 10 pages
- Home (with all 8 sections)
- Shop all
- Product detail
- 5 category pages
- Cart + Checkout
- Order confirmation
- About Us
- Contact Us
- Offers / Sale
- Search results

### 4 API endpoints
- `/api/products` — products with filters
- `/api/orders` — order creation
- `/api/contact` — contact form
- `/api/reviews` — customer reviews

### 20 products across 5 categories
- Lipsticks (4)
- Foundation (4)
- Eyeshadow (4)
- Skincare (4)
- Brushes (4)

Some products have shades, discounts, badges (NEW, BESTSELLER, SALE), ratings, and reviews.

## Testing the flow

To make sure everything works:

1. Open `localhost:3000`
2. Click "Shop the collection" → see all products
3. Hover any product → click "Quick add" → cart drawer opens
4. Click cart icon → see drawer
5. Click "Checkout" → fill the form with any data → click "Place order"
6. Land on the success page with an order number
7. Visit `/api/orders` in the browser → see your order in JSON
8. Try the search bar in the navbar
9. Visit `/about`, `/contact`, `/offers`

## What to show your teacher

1. The **live Vercel URL**
2. The **GitHub repository**
3. Full purchase flow video (1-2 min)
4. Open DevTools → Network tab → show real `POST /api/orders` request
5. Open `/api/products` in the browser → show backend JSON response

Good luck!
