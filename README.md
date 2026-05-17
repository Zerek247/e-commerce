# Lumière — Pastel Beauty E-commerce

A full-stack e-commerce platform for a curated beauty brand, built with Next.js 14, TypeScript, and Tailwind CSS. Features a complete shopping experience with cart, simulated checkout, product categories, and a soft pastel design.

## Tech stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom pastel palette
- **State**: React Context API + sessionStorage
- **Icons**: Lucide React
- **Images**: Next/Image with remote Unsplash sources
- **Backend**: Next.js API Routes (serverless functions)
- **Deployment**: Vercel

## Features

- Home page with hero, categories, bestsellers, and new arrivals
- Product catalog with category filtering
- Individual product pages with shade selection
- Functional shopping cart with quantity controls
- Simulated checkout flow with order confirmation
- API endpoints for products and orders
- Fully responsive design
- Custom pastel color system (rose, lavender, peach, sage)
- Elegant typography pairing (Cormorant Garamond + Inter)

## Project structure

```
lumiere-ecommerce/
├── app/
│   ├── api/
│   │   ├── products/route.ts    # GET products endpoint
│   │   └── orders/route.ts      # POST/GET orders endpoint
│   ├── cart/page.tsx
│   ├── category/[slug]/page.tsx
│   ├── checkout/
│   │   ├── page.tsx
│   │   └── success/page.tsx
│   ├── products/
│   │   ├── page.tsx             # All products
│   │   └── [id]/page.tsx        # Product detail
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                 # Home
├── components/
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ProductCard.tsx
├── lib/
│   ├── cart-context.tsx         # Cart state management
│   └── products.ts              # Product data
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── package.json
```

## Running locally

You need Node.js 18+ installed.

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
```

Then open http://localhost:3000

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to vercel.com and import the GitHub repo.
3. Vercel will auto-detect Next.js. Click **Deploy**.
4. Your site will be live at `your-project.vercel.app` in about a minute.

No environment variables are required for the basic version.

## API endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | List all products (filter with `?category=lips`) |
| POST | `/api/orders` | Create a new order |
| GET | `/api/orders` | List all orders received this session |

## Color palette

| Token | Hex | Use |
|-------|-----|-----|
| Cream | #FAF6F2 | Background |
| Mauve 700 | #6B4A52 | Primary text & buttons |
| Mauve 500 | #8B6B73 | Secondary text |
| Rose 100/200 | #F8E5E5 / #F4D9DD | Lips category |
| Lavender 100 | #E8E0EC | Eyes category |
| Peach 100 | #F0E4D8 | Face category |
| Sage 100 | #DCE8E0 | Skincare category |

## Notes

This is a school project. Payments are simulated and no real transactions occur. Orders are stored in memory and reset when the serverless function cycles. For a production version, connect a database such as Supabase or Neon.

## License

Built for educational purposes.
